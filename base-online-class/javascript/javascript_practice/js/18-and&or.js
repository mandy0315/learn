window.addEventListener('DOMContentLoaded',function(){
    // 和:&& / 不:!(..)
    let haveIDIn = ()=> {
        const myId = true;
        const myIn = false;
        return (myId == true && myIn == true)? '可以' : '不可以'
    }
    document.getElementById('replyId').textContent = haveIDIn();

    // 或:||
    let haveVip = ()=> {
        const noVip = false;
        const myCost = 1200;
        return (myCost >= 1000 || noVip == true)?  '可以' : '不可以'
    }
    document.getElementById('replyId2').textContent = haveVip();


    let haveGift = (vip,myCost)=> {
        return (vip == true && myCost >= 1000)?  '有' : '沒有'
    }
    document.getElementById('andId').textContent= haveGift(false,1500);
    })



