window.addEventListener('DOMContentLoaded',function(){
    // 等於:== / 不等於:!==
    // 布林：true = 1 是 / false = 0
    // 嚴謹等於：===（會判斷型別）/ 一般等於：==

    // 1.請問您是本月壽星嗎？
    let monthTalk = () =>{
        const nowMonth = 5;
        const myMonth = 3;
        // 三元運算子
        return (nowMonth === myMonth)? "是" : "不是";
    }
    document.getElementById('birthdayId').textContent = monthTalk();

    // 請問人還沒到齊對嗎？
    let peopleTalk = ()=> {
        const nowPeople = 1;
        const comePeople = 2;
        return (nowPeople !== comePeople)? "還沒" : "到了"
    }
    document.getElementById('peopleId').textContent = peopleTalk();

})
