let banner = document.querySelector('.banner');
let windowHeight = () =>{
    // 擷取視窗高度 window.innerHeight
	banner.style.height = window.innerHeight + 'px'
}
windowHeight()
// 拖曳視窗執行 window.onresize
window.onresize = () =>{
	windowHeight()
}