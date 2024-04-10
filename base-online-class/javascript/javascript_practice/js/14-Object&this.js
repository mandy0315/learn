window.addEventListener('DOMContentLoaded',function(){
    let farm = {
        farmer: 'mandy',
        chick: 20,
        duck: 10,
        dog: ['ann','tony'],
        // 呼叫農夫回去吃飯
        goDinner: function(){
            // 大部分 this 是指呼叫 function 的對象 farm
            console.log(this.farmer+ '，該回去吃飯了');
        },
        // 畜類有幾隻
        livestock: function(){
            var num = this.duck + this.chick + this.dog.length;
            console.log('農場總共有'+num+'隻畜類');
        }
    };
    farm.goDinner();
    farm.livestock();

})
