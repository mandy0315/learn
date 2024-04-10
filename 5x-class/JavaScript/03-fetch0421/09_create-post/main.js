document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-post-form');
  const submitBtn = form.querySelector('button[type=submit]');

  form.addEventListener('submit', async event => {
    // 不執行 form 預設行為 ，由 js 傳送
    event.preventDefault();
    // let's start coding

    // 每個錯誤區一開始是空白
    form.querySelectorAll('.error').forEach(errorSpan =>{
      errorSpan.textContent = ''
    })
    // 按下新增 漸層動畫
    submitBtn.classList.add('loading');
    // 防止一直送出 .disable = true
    submitBtn.disable = true;

    const response = await fetch(
      'https://pastleo-posts-api.herokuapp.com/api/posts',
      {
        method: 'POST',
        // 傳送 key 值
        headers: {
          Authorization: 'pastleo-js-posts-api-secret'
        },
        // new 實體物件 把內容傳送過去
        body: new FormData(form)
      }
    )
    submitBtn.classList.remove('loading');
    // response.ok 傳送資料可不可以; debugger 執行
    if (response.ok) {
      submitBtn.textContent = 'Success!';
      // 執行成功進行清除
      form.querySelectorAll('input,textarea').forEach(input =>{
        input.value = '';
      })

    } else {
      submitBtn.textContent = 'Error!';
      // 右鍵檢查 preview 找到錯誤訊息
      const errors = await response.json();
      console.log(errors);
      form.querySelectorAll('label').forEach(label => {
        const error = errors[label.htmlFor];
        if(error){
          label.querySelector('.error').textContent = error.join(',')
        }
      })
    }
    // 輸出錯誤 延遲兩秒回到原本按鈕
    setTimeout(() => {
      submitBtn.textContent = 'Submit';
      submitBtn.disable = false;
    }, 2000);

  });
})
