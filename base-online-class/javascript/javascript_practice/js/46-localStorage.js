//宣告
const btn= document.querySelector('.btn');
const btnCall= document.querySelector('.btnCall');
// 儲存資料函式
function saveMyName(e) {
    const str =document.querySelector('.myName').value
    localStorage.setItem('myName',str)
}
// 按鈕點擊儲存資料
btn.addEventListener('click',saveMyName);
// 按鈕點擊取出資料
btnCall.addEventListener('click',function btnCall(e) {
    // 點擊按鈕後取出myname資料
    let get=localStorage.getItem('myName')
    console.log(get)
    alert('你的名字叫'+ get)
});
