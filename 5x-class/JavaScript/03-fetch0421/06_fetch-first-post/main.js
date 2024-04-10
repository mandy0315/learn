document.addEventListener('DOMContentLoaded',function(){
  // fetch(抓取網址))
  fetch('https://pastleo-posts-api.herokuapp.com/api/posts')
  .then(request => request.json())
  // .then(資料庫名稱 => {})
  .then(data => {
    console.log(data);

    const firstPost = data[0];
    const postTitleA = document.querySelector('.post-title');

    // 2.標題連結-細節資料
    postTitleA.textContent = firstPost.title;
    postTitleA.href = firstPost.url;

    // 1.顯示資料
    document.querySelector('.post-created-at').textContent = firstPost.created_at;
    document.querySelector('.post-author').textContent = firstPost.author;
    document.querySelector('.post-description').textContent = firstPost.description;

    // 3.more 按鈕連結，隱藏 class 刪除 - 細節資料
    const postLinkA = document.querySelector('.post-link');
    postLinkA.classList.remove('hidden');
    postLinkA.href = firstPost.url;
  })
})
