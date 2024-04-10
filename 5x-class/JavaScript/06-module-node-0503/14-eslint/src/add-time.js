import Typed from 'typed.js';

import { timeoutPromise } from './utils.js';

async function addTime (timeout) {
  const timeDiv = document.createElement('div');
  document.getElementById('container').appendChild(timeDiv);

  const textSpan = document.createElement('span');
  timeDiv.appendChild(textSpan);

  let typed = new Typed(textSpan, {
    strings: ['Loading...'],
    typeSpeed: 30
  });

  await timeoutPromise(timeout);
  typed.destroy();
  //
  // window.typed = typed;
  // 有時候 webpack debugger 不在同位置
  // debugger

  typed = new Typed(textSpan, {
    strings: ['Completed', (new Date()).toString()],
    typeSpeed: 30,
    onComplete: () => {
      typed.cursor.remove();
    }
  });
  // window.typed = typed;

  // timeDiv.textContent = (new Date()).toString();
}

export default addTime;
