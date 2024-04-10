const list = document.querySelector(".list li")

console.log(list.dataset.dog);
function clickList(e) {
    //e.target讀取整段html  讀取資料的自訂名稱.dataset.num
    const getNum= e.target.dataset.num
    const getDog= e.target.dataset.dog
    // console.log(getNum)
    console.log("農夫編號" + getNum)
    console.log("農場有" + getDog + "隻狗")
}
list.addEventListener('click',clickList)