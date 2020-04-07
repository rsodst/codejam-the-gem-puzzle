import '../style/style.scss';
import DragManager './dragManager';

class Game {
  constructor(size) {
    this.view = document.createElement('div');
    this.view.classList.add('game');
    this.view.classList.add('game--size-4x4');


    var DragManager = new function () {

      /**
       * составной объект для хранения информации о переносе:
       * {
       *   elem - элемент, на котором была зажата мышь
       *   avatar - аватар
       *   downX/downY - координаты, на которых был mousedown
       *   shiftX/shiftY - относительный сдвиг курсора от угла элемента
       * }
       */
      var dragObject = {};

      var self = this;

      function onMouseDown(e) {
        // if (e.which != 1) return;

        var elem = e.target.closest('.draggable');
        if (!elem) return;

        dragObject.elem = elem;

        // запомним, что элемент нажат на текущих координатах pageX/pageY
        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;

        return false;
      }

      function onMouseMove(e) {
        if (!dragObject.elem) return; // элемент не зажат

        if (!dragObject.avatar) { // если перенос не начат...
          var moveX = e.pageX - dragObject.downX;
          var moveY = e.pageY - dragObject.downY;

          // если мышь передвинулась в нажатом состоянии недостаточно далеко
          if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
            return;
          }

          // начинаем перенос
          dragObject.avatar = createAvatar(e); // создать аватар
          if (!dragObject.avatar) { // отмена переноса, нельзя "захватить" за эту часть элемента
            dragObject = {};
            return;
          }

          // аватар создан успешно
          // создать вспомогательные свойства shiftX/shiftY
          var coords = getCoords(dragObject.avatar);
          dragObject.shiftX = dragObject.downX - coords.left;
          dragObject.shiftY = dragObject.downY - coords.top;

          startDrag(e); // отобразить начало переноса
        }

        // отобразить перенос объекта при каждом движении мыши
        dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
        dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

        return false;
      }

      function onMouseUp(e) {
        if (dragObject.avatar) { // если перенос идет
          finishDrag(e);
        }

        // перенос либо не начинался, либо завершился
        // в любом случае очистим "состояние переноса" dragObject
        dragObject = {};
      }

      function finishDrag(e) {
        var dropElem = findDroppable(e);

        if (!dropElem) {
          self.onDragCancel(dragObject);
        } else {
          self.onDragEnd(dragObject, dropElem);
        }
      }

      function createAvatar(e) {

        // запомнить старые свойства, чтобы вернуться к ним при отмене переноса
        var avatar = dragObject.elem;
        var old = {
          parent: avatar.parentNode,
          nextSibling: avatar.style.nextSibling,
          position: avatar.style.position || '',
          left: avatar.style.left || '',
          top: avatar.style.top || '',
          zIndex: avatar.style.zIndex || ''
        };

        // функция для отмены переноса
        avatar.rollback = function () {
          old.parent.insertBefore(avatar, old.nextSibling);
          avatar.style.position = old.position;
          avatar.style.left = old.left;
          avatar.style.top = old.top;
          avatar.style.zIndex = old.zIndex
        };

        return avatar;
      }

      function startDrag(e) {
        var avatar = dragObject.avatar;

        // инициировать начало переноса
        document.body.appendChild(avatar);
        avatar.style.zIndex = 9999;
        avatar.style.position = 'absolute';
      }

      function findDroppable(event) {
        // спрячем переносимый элемент
        dragObject.avatar.style.visibility = 'hidden';

        // получить самый вложенный элемент под курсором мыши
        var elem = document.elementFromPoint(event.clientX, event.clientY);

        console.log(elem);

        // показать переносимый элемент обратно
        dragObject.avatar.style.visibility = 'visible';

        if (elem == null) {
          // такое возможно, если курсор мыши "вылетел" за границу окна
          return null;
        }

        return elem.closest('.droppable');
      }

      document.onmousemove = onMouseMove;
      document.onmouseup = onMouseUp;
      document.onmousedown = onMouseDown;

      // handle mobile input
      document.ontouchmove = (touchEvent) => {
        onMouseMove(touchEvent.touches[0]);
      };

      document.ontouchend = (touchEvent) => {
        onMouseUp(touchEvent.changedTouches[0]);
      };

      document.ontouchstart = (touchEvent) => {
        onMouseDown(touchEvent.touches[0]);
      };

      this.onDragEnd = function (dragObject, dropElem) { };
      this.onDragCancel = function (dragObject) { };

    };

    function getCoords(elem) { // кроме IE8-
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

    }


    let counter = 1;
    for (let i = 0; i < 4; ++i) {
      for (let j = 0; j < 4; ++j) {

        const element = document.createElement('div');
        element.classList.add('cell');

        element.style.left = `${100 * j + 8}px`;
        element.style.top = `${100 * i + 8}px`;

        if (i === 0 && j === 2) {
          element.classList.add('cell--empty');
          this.view.appendChild(element);
          element.classList.add('droppable');
          continue;
        } else {
          element.innerText = counter++;
          element.classList.add('draggable');

        }

        this.view.appendChild(element);
      }
    }

    document.body.appendChild(this.view);

    DragManager.onDragCancel = function (dragObject) {
      dragObject.avatar.rollback();
    };

    DragManager.onDragEnd = function (dragObject, dropElem) {
      dragObject.elem.style.left = dropElem.style.left;
      dragObject.elem.style.top = dropElem.style.top;

      console.log('dragend');
    };
  }
}

const game = new Game();
