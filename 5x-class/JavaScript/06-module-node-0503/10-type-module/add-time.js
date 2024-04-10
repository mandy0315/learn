// as 改名
import {timeoutPromise as sleep} from './utils.js';
async function addTime(ms) {
  const timeDiv = document.createElement('div');
  timeDiv.textContent = 'Loading...';
  document.getElementById('container').appendChild(timeDiv);
  await sleep(ms);
  timeDiv.textContent = (new Date()).toString();
}

export default addTime;