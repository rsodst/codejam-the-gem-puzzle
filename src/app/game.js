import DragManager from './dragManager';
import StopWatch from './stopWtach';

class Game {
  constructor() {

    this.createGame(4, true);

    DragManager.onDragCancel = function (dragObject) {
      dragObject.avatar.rollback();
    };

    DragManager.onDragEnd = (dragObject, dropElem) => {
      dragObject.elem.style.left = dropElem.style.left;
      dragObject.elem.style.top = dropElem.style.top;

      let number = dragObject.elem.innerText;
      this.beginStepForCell(Number(number), true, dragObject.oldLeft, dragObject.oldTop);
    };
  }

  // view

  createGameView() {

    this.view = document.createElement('div');
    this.view.classList.add('container');

    this.game = document.createElement('div');
    this.game.classList.add('game');
    this.game.classList.add(`game--size-${this.size}x${this.size}`);

    this.cells = [];

    this.field.forEach((row, i) => {
      row.forEach((element, j) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        cell.style.left = `${100 * j}px`;
        cell.style.top = `${100 * i}px`;

        cell.innerText = element;

        this.cells.push({
          number: Number(element),
          element: cell
        });

        this.game.appendChild(cell);
      });
    });

    this.updateCells();

    var controls = document.createElement('control');
    controls.innerHTML = " <div class=\"control game-bar\">\r\n        <div>\r\n            <button onclick=\"game.createGame();\">\u0420\u0430\u0437\u043C\u0435\u0448\u0430\u0442\u044C \u0438 \u043D\u0430\u0447\u0430\u0442\u044C<\/button>\r\n            <button  id=\"stopBtn\" onclick=\"game.stop()\">\u0421\u0442\u043E\u043F<\/button>\r\n            <button onclick=\"game.save()\">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C<\/button>\r\n        <\/div>\r\n        <div>\r\n            <span id=\"stepCount\">\u0425\u043E\u0434\u043E\u0432: 0<\/span>\r\n            <span id=\"stopWatch\">\u0412\u0440\u0435\u043C\u044F: 10:56<\/span>\r\n        <\/div>\r\n        <p>\u0420\u0430\u0437\u0440\u0435\u043C \u043F\u043E\u043B\u044F: 4x4<\/p>\r\n        <div>\u0414\u0440\u0443\u0433\u0438\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B:\r\n            <a href=\"#\" onclick=\"game.createGame(3);\">3x3<\/a>\r\n            <a href=\"#\" onclick=\"game.createGame(4);\">4x4<\/a>\r\n            <a href=\"#\" onclick=\"game.createGame(5);\">5x5<\/a>\r\n            <a href=\"#\" onclick=\"game.createGame(6);\">6x6<\/a>\r\n            <a href=\"#\" onclick=\"game.createGame(7);\">7x7<\/a>\r\n        <\/div>\r\n        <button onclick=\"game.showResults();\">\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B<\/button>\r\n    <\/div>";

    this.view.appendChild(this.game);
    this.view.appendChild(controls);

    document.body.appendChild(this.view);
  }

  showResults()
  {
    let result = localStorage.getItem('results');

    if (result == null)
    {
      alert('Нет сохраненных результатов');
      return;
    }

    result = JSON.parse(result);

    let message = '';

    result.forEach((p,i)=>{
      message += `${i}. Результат: ${p.stepCount}\n`;
    });

    alert(message);
  }

  stop() {
    if (!this.isStopped) {
      document.getElementById('stopBtn').innerText = 'Play'
      this.stopWatch.stop();
      this.isStopped = true;
      this.game.classList.add('disabled');
    } else {
      document.getElementById('stopBtn').innerText = 'Stop'
      this.game.classList.remove('disabled');
      this.stopWatch.start();
      this.isStopped = false;
    }
  }

  save() {
    localStorage.setItem('fieldValues', this.field);
  }

  createGame(size, firstStart) {

    this.isStopped = false;

    if (this.view) {
      Array.from(document.body.childNodes).forEach((p) => {
        if (p.nodeName == 'DIV') {
          document.body.removeChild(p);
        }
      });
    }

    this.cells = [];
    this.field = [];

    size = size || this.size;

    this.stepCount = 0;

    if (firstStart) {
      this.createGameField(size, localStorage.getItem('fieldValues'));
    } else {
      this.createGameField(size);
    }
    this.createGameView();

    let stopWatchDisplay = document.getElementById('stopWatch');
    this.stopWatch = new StopWatch(stopWatchDisplay);
    this.stopWatch.start();


  }

  setAsHoleElement(element, enabled = true) {
    if (enabled) {
      element.classList.add('cell--empty');
      element.classList.add('droppable');
    } else {
      element.classList.remove('cell--empty');
      element.classList.remove('droppable');
    }
  }

  setAsDraggableElement(element, enabled = true) {
    if (enabled) {
      element.classList.add('cell--hovered');
      element.classList.add('draggable');
    } else {
      element.classList.remove('cell--hovered');
      element.classList.remove('draggable');
    }
  }

  updateCells() {
    let hole = this.cells.find(p => p.number == this.size * this.size);

    this.setAsHoleElement(hole.element);

    this.cells.forEach(p => {
      p.element.classList.remove('cell--hovered');
      p.element.classList.remove('draggable');
      p.element.onclick = null;
    });

    this.getDraggableNumber().forEach(number => {
      let cell = this.cells.find(cell => cell.number == number);
      this.setAsDraggableElement(cell.element);
      cell.element.onclick = () => {
        this.beginStepForCell(cell.number);
      }
    });
  }

  beginStepForCell(number, fromJesture, holeLeft, holeTop) {

    this.stepCount++;

    let stepCount = document.getElementById('stepCount');
    stepCount.innerText = `Ходов: ${this.stepCount}, `;

    let hole = this.cells.find(p => p.number == this.size * this.size);
    let clickedCell = this.cells.find(p => p.number == number);

    if (fromJesture) {
      clickedCell.element.onclick = null;
    }

    let holeIndex = this.findIndex(this.size * this.size);
    let currentIndex = this.findIndex(number);
    // swap in array
    this.swap(holeIndex, currentIndex);

    if (fromJesture) {
      hole.element.style.left = `${holeLeft}px`;
      hole.element.style.top = `${holeTop}px`;

    } else {
      let tmpLeft = parseInt(hole.element.style.left);
      let tmpTop = parseInt(hole.element.style.top);

      hole.element.style.left = clickedCell.element.style.left;
      hole.element.style.top = clickedCell.element.style.top;

      clickedCell.element.style.left = `${tmpLeft}px`;
      clickedCell.element.style.top = `${tmpTop}px`;
    }

    this.updateCells();

    this.checkIsWin();
  }

  // logic

  checkIsWin() {
    if (this.field.join(',') == this.field.flat().sort().join(',')) {
      alert(`Вы выиграли за ${document.getElementById('stopWatch').innerText} и ${this.stepCount} ходов`);
      
      let result = localStorage.getItem('results');

      if(result == null)
      {

        result = [
          {
            stepCount : this.stepCount
        }
      ];
      localStorage.setItem('results',JSON.stringify(result));

      }else{

        result = JSON.parse(result);

        if (result.length > 10)
        {
          

        result.push({
          stepCount: this.stepCount
        });

        result.sort((a,b)=> {
          if (a.stepCount > b.stepCount)
          {
            return -1;
          }else{
            return 1;
          }
        })
      }

      result = result.slice(0,10);

        localStorage.setItem('results',JSON.stringify(result));
      }

      this.createGame();

    }
  }

  swap(from, to) {
    let [i, j] = from;
    let [k, x] = to;

    let tmp = this.field[i][j];

    this.field[i][j] = this.field[k][x];
    this.field[k][x] = tmp;
  }

  getDraggableNumber() {
    let [i, j] = this.findIndex(this.size * this.size);
    return [
      this.field[i - 1] ? this.field[i - 1][j] : undefined,
      this.field[i + 1] ? this.field[i + 1][j] : undefined,
      this.field[i] ? this.field[i][j - 1] : undefined,
      this.field[i] ? this.field[i][j + 1] : undefined,
    ].filter(p => p);
  }

  findIndex(number) {
    for (let i = 0; i < this.size; ++i) {
      for (let j = 0; j < this.size; ++j) {
        if (this.field[i][j] === number) {
          return [i, j];
        }
      }
    }
  }

  createGameField(size, fieldValues) {

    console.log(fieldValues);

    this.size = size;

    let availableCellNumbers = [];

    if (!fieldValues) {
      for (let i = 0; i < size * size; ++i) {
        availableCellNumbers.push(i + 1);
      }

      availableCellNumbers.sort(function () {
        return Math.random() - 0.5;
      });
    } else {
      availableCellNumbers = Array.from(fieldValues.split(',').map(p => parseInt(p)));
      console.log(availableCellNumbers);
    }

    this.field = [];
    let k = 0;

    for (let i = 0; i < size; ++i) {
      this.field[i] = [];

      for (let j = 0; j < size; ++j) {
        this.field[i][j] = availableCellNumbers[k++];
      }
    }
  }
}

export default Game;
