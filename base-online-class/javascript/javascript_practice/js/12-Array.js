window.addEventListener('DOMContentLoaded',function(){
  let cornField = [4,5,6];
  let corn = [];

  // 新增
  corn.push(5)
  console.log(corn);

  // 修改
  cornField[0] = 10;
  console.log(cornField[0]);

  // 陣列長度
  console.log('總共有'+ cornField.length + '個玉米田');
})
