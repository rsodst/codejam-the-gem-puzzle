!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var i=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},s=(i(o,r),o.locals?o.locals:{});e.exports=s},function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function l(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],a=t.base?r[0]+t.base:r[0],c=n[a]||0,d="".concat(a," ").concat(c);n[a]=c+1;var u=l(d),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(s[u].references++,s[u].updater(f)):s.push({identifier:d,updater:g(f,t),references:1}),i.push(d)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function h(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,m=0;function g(e,t){var n,i,o;if(t.singleton){var r=m++;n=p||(p=c(t)),i=f.bind(null,n,r,!1),o=f.bind(null,n,r,!0)}else n=c(t),i=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=l(n[i]);s[o].references--}for(var r=a(e,t),c=0;c<n.length;c++){var d=l(n[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=r}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'body{margin:0;padding:0}.game{position:relative;display:flex;flex-wrap:wrap;box-shadow:0 0 3px black;background-color:#dfdfdf}.game--size-3x3{width:300px;height:300px}.game--size-4x4{width:400px;height:400px}.game--size-5x5{width:500px;height:500px}.game--size-6x6{width:600px;height:600px}.game--size-7x7{width:700px;height:700px}.game--size-8x8{width:800px;height:800px}.control{display:flex;flex-direction:column;justify-content:center;align-items:center;height:200px}.control .buttons{height:50px;width:100%}.control button{margin-top:10px;background-color:green;color:white;border:0;border-radius:5px;cursor:pointer}.control button.hover{background-color:#10cf10}.control div{margin-top:5px}.cell{position:absolute;box-shadow:0 0 1px black;width:100px;height:100px;background-color:white;display:flex;justify-content:center;align-items:center;font-size:20px;font-family:"Roboto", sans-serif;user-select:none;cursor:pointer;transition:box-shadow 0.3s ease}.cell.cell--empty{box-shadow:0 0 0px black;background-color:#dfdfdf;color:#dfdfdf}.cell.cell--empty:hover{animation:none}.cell.cell--hovered:hover{z-index:98;animation:0.3s ease forwards shadow}@keyframes shadow{0%{box-shadow:0 0 0px black}100%{box-shadow:0 0 5px black}}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(s=i,l=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(a," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var s,l,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var a=[].concat(e[l]);i&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var i=new function(){let e={};const t=this;function n(t){const n=t.target.closest(".draggable");if(n)return e.elem=n,e.downX=t.pageX,e.downY=t.pageY,e.oldLeft=parseInt(n.style.left),e.oldTop=parseInt(n.style.top),!1}function i(t){if(e.elem){if(!e.avatar){const n=t.pageX-e.downX,i=t.pageY-e.downY;if(Math.abs(n)<3&&Math.abs(i)<3)return;if(e.avatar=function(t){const n=e.elem,i={parent:n.parentNode,nextSibling:n.style.nextSibling,position:n.style.position||"",left:n.style.left||"",top:n.style.top||"",zIndex:n.style.zIndex||""};return n.rollback=function(){i.parent.insertBefore(n,i.nextSibling),n.style.position=i.position,n.style.left=i.left,n.style.top=i.top,n.style.zIndex=i.zIndex},n}(),!e.avatar)return void(e={});const o=function(e){const t=e.getBoundingClientRect();return{top:t.top+pageYOffset,left:t.left+pageXOffset}}(e.avatar);e.shiftX=e.downX-o.left,e.shiftY=e.downY-o.top,function(t){const{avatar:n}=e;document.body.appendChild(n),n.style.zIndex=9999,n.style.position="absolute"}()}return e.avatar.style.left=`${t.pageX-e.shiftX}px`,e.avatar.style.top=`${t.pageY-e.shiftY}px`,!1}}function o(n){e.avatar&&function(n){const i=function(t){e.avatar.style.visibility="hidden";const n=document.elementFromPoint(t.clientX,t.clientY);if(console.log(n),e.avatar.style.visibility="visible",null==n)return null;return n.closest(".droppable")}(n);i?t.onDragEnd(e,i):t.onDragCancel(e)}(n),e={}}document.onmousemove=i,document.onmouseup=o,document.onmousedown=n,document.ontouchmove=e=>{i(e.touches[0])},document.ontouchend=e=>{o(e.changedTouches[0])},document.ontouchstart=e=>{n(e.touches[0])},this.onDragEnd=function(e,t){},this.onDragCancel=function(e){}};var o=class{constructor(){this.createGameField(3),this.createGameView(),this.stepCount=0,i.onDragCancel=function(e){e.avatar.rollback()},i.onDragEnd=(e,t)=>{e.elem.style.left=t.style.left,e.elem.style.top=t.style.top;let n=e.elem.innerText;this.beginStepForCell(Number(n),!0,e.oldLeft,e.oldTop)}}createGameView(){this.view=document.createElement("div"),this.view.classList.add("container"),this.game=document.createElement("div"),this.game.classList.add("game"),this.game.classList.add(`game--size-${this.size}x${this.size}`),this.cells=[],this.field.forEach((e,t)=>{e.forEach((e,n)=>{const i=document.createElement("div");i.classList.add("cell"),i.style.left=`${100*n}px`,i.style.top=`${100*t}px`,i.innerText=e,this.cells.push({number:Number(e),element:i}),this.game.appendChild(i)})}),this.updateCells();var e=document.createElement("control");e.innerHTML=' <div class="control game--size-3x3">\r\n        <div>\r\n            <button onclick="game.createGame();">Размешать и начать</button>\r\n            <button onclick="game.stop()">Стоп</button>\r\n            <button onclick="game.save()">Сохранить</button>\r\n        </div>\r\n        <div>\r\n            <span id="stepCount">Ходов: 0</span>\r\n            <span>Время: 10:56</span>\r\n        </div>\r\n        <p>Разрем поля: 4x4</p>\r\n        <div>Другие размеры:\r\n            <a href="#" onclick="game.createGame(3);">3x3</a>\r\n            <a href="#" onclick="game.createGame(4);">4x4</a>\r\n            <a href="#" onclick="game.createGame(5);">5x5</a>\r\n            <a href="#" onclick="game.createGame(6);">6x6</a>\r\n            <a href="#" onclick="game.createGame(7);">7x7</a>\r\n        </div>\r\n        <button>Результаты</button>\r\n    </div>',this.view.appendChild(this.game),this.view.appendChild(e),document.body.appendChild(this.view)}stop(){}save(){}createGame(e){this.view&&Array.from(document.body.childNodes).forEach(e=>{"DIV"==e.nodeName&&document.body.removeChild(e)}),this.cells=[],this.field=[],e=e||this.size,this.stepCount=0,this.createGameField(e),this.createGameView()}setAsHoleElement(e,t=!0){t?(e.classList.add("cell--empty"),e.classList.add("droppable")):(e.classList.remove("cell--empty"),e.classList.remove("droppable"))}setAsDraggableElement(e,t=!0){t?(e.classList.add("cell--hovered"),e.classList.add("draggable")):(e.classList.remove("cell--hovered"),e.classList.remove("draggable"))}updateCells(){let e=this.cells.find(e=>e.number==this.size*this.size);this.setAsHoleElement(e.element),this.cells.forEach(e=>{e.element.classList.remove("cell--hovered"),e.element.classList.remove("draggable"),e.element.onclick=null}),this.getDraggableNumber().forEach(e=>{let t=this.cells.find(t=>t.number==e);this.setAsDraggableElement(t.element),t.element.onclick=()=>{this.beginStepForCell(t.number)}})}beginStepForCell(e,t,n,i){this.stepCount++,document.getElementById("stepCount").innerText=`Ходов: ${this.stepCount}`;let o=this.cells.find(e=>e.number==this.size*this.size),r=this.cells.find(t=>t.number==e);t&&(r.element.onclick=null);let s=this.findIndex(this.size*this.size),l=this.findIndex(e);if(console.log(this.field.join(",")),this.swap(s,l),console.log(this.field.join(",")),t)o.element.style.left=`${n}px`,o.element.style.top=`${i}px`;else{let e=parseInt(o.element.style.left),t=parseInt(o.element.style.top);o.element.style.left=r.element.style.left,o.element.style.top=r.element.style.top,r.element.style.left=`${e}px`,r.element.style.top=`${t}px`}this.updateCells(),this.checkIsWin()}checkIsWin(){this.field.join(",")==this.field.flat().sort().join(",")&&alert("Win")}swap(e,t){let[n,i]=e,[o,r]=t,s=this.field[n][i];this.field[n][i]=this.field[o][r],this.field[o][r]=s}getDraggableNumber(){let[e,t]=this.findIndex(this.size*this.size);return[this.field[e-1]?this.field[e-1][t]:void 0,this.field[e+1]?this.field[e+1][t]:void 0,this.field[e]?this.field[e][t-1]:void 0,this.field[e]?this.field[e][t+1]:void 0].filter(e=>e)}findIndex(e){for(let t=0;t<this.size;++t)for(let n=0;n<this.size;++n)if(this.field[t][n]===e)return[t,n]}createGameField(e){this.size=e;let t=[];for(let n=0;n<e*e;++n)t.push(n+1);t.sort((function(){return Math.random()-.5})),this.field=[];let n=0;for(let i=0;i<e;++i){this.field[i]=[];for(let o=0;o<e;++o)this.field[i][o]=t[n++]}}};window.game=new o}]);