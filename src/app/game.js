import DragManager from './dragManager';

class Game {
  constructor(size) {
    DragManager.onDragCancel = function (dragObject) {
      dragObject.avatar.rollback();
    };

    DragManager.onDragEnd = function (dragObject, dropElem) {
      dragObject.elem.style.left = dropElem.style.left;
      dragObject.elem.style.top = dropElem.style.top;

      console.log('dragend');
    };
  }

  create4x4GameField() {
    this.view = document.createElement('div');
    this.view.classList.add('game');
    this.view.classList.add('game--size-4x4');

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
  }
}
