const list= document.querySelector('.list')
const farm=[
    {
        farmer: "敏佳"
    },
    {
        farmer: "啟豪"
    },
    {
        farmer: "慧玲"
    }
]
//step1:資料輸出html
getList()
function getList() {
    list.innerHTML = ''
    let len = farm.length
    //迴圈取出陣列資料
    for (let i = 0; i < len; i++) {
        let liEl = document.createElement('li');
        liEl.setAttribute('data-num',i);
        liEl.textContent = farm[i].farmer;
        list.appendChild(liEl)
    }
}
list.addEventListener('click',function(e) {
    if (e.target.nodeName !== 'LI') {return};
    let getNum =  e.target.dataset.num;
    farm.splice(getNum,1)
    getList()
})
