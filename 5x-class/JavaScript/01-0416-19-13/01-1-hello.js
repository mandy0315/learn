// // 華氏 -> 攝氏 運算
// function my_round(num, n = 2) {
//   // ** n 放大到幾倍
//   return Math.round(num * (10 ** n))/(10 ** n)
// }
// function f_to_c(temp) {
//   // 邀回傳值
//  return (temp - 32) / 1.8

// }
// console.log(f_to_c(120));

// // this = hero
// let hero = {
//   name: '一護',
//   hp: 100,
//   power: 5,
//   healing: function(n = 5){
//     console.log(this.hp) 
//   }
// }

// hero.healing(20)

// 
let hero = {
  name: '一護',
  hp: 100,
  power: 5,
  healing: function(n = 5){
    this.hp += n
    if (this.hp >= 100) {    // 這邊的 this 等於物件本身
      this.hp = 100
    }
  },
  attack: function(){
    console.log('attack!!!!!')
    this.hp -= 5
    // console.log(this.hp)
  }
}
hero.attack()
hero.attack()
console.log(hero.hp);
