window.addEventListener('DOMContentLoaded',function(){
let farms =[
    {
        farmer: '卡斯伯',
        field: 6,
        chick: 120
    },
    {
        farmer: '查理',
        field: 10,
        chick: 50
    }
]
const farmEl = document.querySelector('.farmList');
// farms.forEach( data =>{
//     return result += `<li>${data.farmer}</li>`
// })
// farmEl.innerHTML = result;
farms.forEach( data =>{
    const liEl = document.createElement('li');
    liEl.textContent = data.farmer;
    farmEl.appendChild(liEl);
})
})
