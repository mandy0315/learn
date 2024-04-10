// 存在 localStorage 值一定是字串
const farm =[
    {
        farmer: '敏佳'
    },{
        farmer: '啟豪'
    }
]
// JSON.stringify()= 將 array 陣列轉 string 字串
const farmString = JSON.stringify(farm)
//建立儲存資料
localStorage.setItem('farmer',farmString)
//取出資料
const get= localStorage.getItem('farmer')
// JSON.parse()= 將 string 字串 轉 array 陣列
const getData = JSON.parse(get)
// console.log(typeof(getData))
console.log(getData[0].farmer)
