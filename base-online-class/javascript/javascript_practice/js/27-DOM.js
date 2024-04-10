
const el =['蔡敏佳','周永琳','ff','vv','ff']
const elLen = el.length;
const myName = document.getElementById("myName");
// const myName = document.querySelector("#myName")
const liEl = document.createElement('li')

for (let i = 0; i < elLen; i++) {
    liEl.textContent= '我是' + el[i]
    myName.appendChild(liEl)
}
