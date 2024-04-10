window.addEventListener('DOMContentLoaded',function(){
    // 陣列＋物件 JSON 格式
    var farms =[
        {
            farmer:'mandy',
            chick: 20,
            duck:10,
            dog:['fit','cool']
        },
        {
            farmer:'apple',
            chick: 30,
            duck: [40,20,10],
            dog:['honey','smile']
        }
    ];
    console.log(farms[1].dog[0]);
    console.log(farms[0].duck);

})


