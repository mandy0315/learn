// //遠端撈資料
// const xhr= new XMLHttpRequest()
// //.open('格式','讀取的網址',同步與非同步)設定好連結資料
// //格式：get(讀取資料)、post(傳送資料到資料庫)
// //true 非同步，資料未撈完，程式繼續往下跑（一般使用）; false 同步，撈完再跑程式
// xhr.open('get','http://opendata2.epa.gov.tw/UV/UV.json',true)
// //.send() 傳送參數
// xhr.send(null)
// //.onload 等資料接收到，再執行
// xhr.onload= function() {
//     //判斷網址是否正確 status狀態 200有回傳 404錯誤
//     if (xhr.status == 200) {
//         // json 轉回 js 格式 ; 回應的文字 text，能透過 responseText 屬性 取得
//         const str = JSON.parse(xhr.responseText)
//         // console.log(str.fields[0].id);
//         //DOM讀取把姓名傳送到 message
//         document.querySelector('.message').textContent= str[0].County
//     }else{
//         document.querySelector('.message').textContent= '資料錯誤！！'
//     }
// }

firstLoaded()
async function firstLoaded() {
    let data = await fetchAPI();
    console.log(data);
    document.querySelector('.message').textContent = data[0].County
}
async function fetchAPI(){
	let request = await fetch('http://opendata2.epa.gov.tw/UV/UV.json',{})
    let response = await request.json();
    return response
}

