// 註冊
let form = document.querySelector('form');
form.addEventListener('submit',async function(e) {
    e.preventDefault();
    let emailStr = document.getElementById('account').value;
    let passwordStr = document.getElementById('password').value;
    let data = 'email='+ emailStr +'&'+'password='+ passwordStr;
    let request = await fetch('https://hexschool-tutorial.herokuapp.com/api/signup',{
        method: 'POST',
        headers: {"Content-type":"application/x-www-form-urlencoded",},
        body: data
    })
    let response= await request.json()
    let message = response.message;
    const div = document.querySelector('div')
    div.innerHTML = ''
    if (message == "帳號註冊成功") {
        readerView(message,div);
    }else if(message == "Email 格式不正確"){
        readerView(message,div);
    }else if(message == "此帳號已被使用"){
        readerView(message,div);
    }else{
        readerView(message,div);
    }
})
function readerView(message,div){
    const pEl = document.createElement('p');
    pEl.textContent = message
    div.insertAdjacentElement('beforeend',pEl)
}