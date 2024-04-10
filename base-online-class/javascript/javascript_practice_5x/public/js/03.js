window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-post-form')
  const submitBtn = document.querySelector('button[type=submit]')
  form.addEventListener('submit',async (e) => {
    e.preventDefault();
    // 按鈕停止
    submitBtn.disabled = true
    // load 動畫
    submitBtn.classList.add('loading')
    // 實體物件
    const formData = new FormData(form)
    const request = await fetch('https://pastleo-posts-api.herokuapp.com/api/posts',{
      method: 'POST',
      // 客戶端向伺服器端做 Authorization 授權身份認證
      headers: {'Authorization':'pastleo-js-posts-api-secret'},
      body: formData
    })
    submitBtn.classList.remove('loading')
    // 傳送後狀態
    if (request.ok) {
      form.querySelectorAll('input,textarea').forEach( text => {
        text.value = ''
      })
    }else{
      // 沒成功的資料
      const errors = await request.json();
      console.log(errors);
      submitBtn.textContent = 'Error'
      form.querySelectorAll('.error').forEach(errorSpan => {
        const errorMsgs = errors[errorSpan.parentNode.htmlFor];

        if (errorMsgs) {
          errorSpan.textContent = errorMsgs
        }
      });
    }
    // 2s 後 按鈕回復正常
    setTimeout(() => {
      submitBtn.disabled = false
      submitBtn.textContent = 'Submit'
    }, 2000);
  })
})
