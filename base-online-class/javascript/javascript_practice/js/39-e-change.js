const area = document.getElementById('areaId');const list = document.querySelector('.list');const data = [
    {
        farmer: '查理',
        place: '前鎮區'
    },
    {
        farmer: '卡斯伯',
        place: '苓雅區'
    }
    ,{
        farmer: '小花',
        place: '苓雅區'
    }
]
// 監聽事件選擇後進行
area.addEventListener('change', haveFarmer, false);
function haveFarmer(e) {
    let select = e.target.value;
    list.innerHTML = '';
    data.forEach( data =>{
        if(select === data.place){
            const liEl = document.createElement ('li');
            liEl.textContent = data.farmer;
            list.appendChild(liEl);
        };
    });
}
