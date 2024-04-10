window.addEventListener("DOMContentLoaded",()=>{
    // 常數 不可改變的變數值; 開頭大寫
    const A = 1;
    console.log(A);
        // []{}裡的值可以變
    const Obj = {
        name: 'mandy',
    }
    Object.freeze(Obj); // 可以用 freeze 把物件跟陣列固定
    Obj.name = 'gu';
    console.log(Obj.name); // 'mandy

    // let 可以改變的變數值
    let a = 1;
    a = 2;
    console.log(a);
})