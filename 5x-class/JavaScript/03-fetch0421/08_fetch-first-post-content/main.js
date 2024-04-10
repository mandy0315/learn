document.addEventListener('DOMContentLoaded', async () => {
  const descriptionDiv = document.querySelector('.post-description');

  // 回傳 
  // fetch('https://pastleo-posts-api.herokuapp.com/api/posts')
  //   // 呼叫 function(response){ return response.json() }
  //   // response.json() 解析 json 非同步
  //   .then(response => response.json())
  //   .then(posts => {
  //     const post = posts[0];
  //     console.log(post);
  //     document.querySelector('.post-created-at').textContent = post.created_at;
  //     document.querySelector('.post-author').textContent = `By ${post.author}`;
  //     const postTitleA = document.querySelector('a.post-title');
  //     postTitleA.textContent = post.title;
  //     postTitleA.href = post.url;
  //     descriptionDiv.textContent = post.description;
  //     // 每篇 id
  //     return fetch(post.api_url);
  //   })
  //   .then(response => response.json())
  //   .then(fullPost => {
  //     document.querySelector('.post-content').textContent = fullPost.content
  //     descriptionDiv.classList.add('hidden');
      
  //   })
  const postsResponse = await fetch('https://pastleo-posts-api.herokuapp.com/api/posts');
  const posts = await postsResponse.json();

  const post = posts[0];
  document.querySelector('.post-created-at').textContent = post.created_at;
  document.querySelector('.post-author').textContent = `By ${post.author}`;
  const postTitleA = document.querySelector('a.post-title');
  postTitleA.textContent = post.title;
  postTitleA.href = post.url;
  descriptionDiv.textContent = post.description;

  // 傳送網址
  const fullPostResponse = await fetch(post.api_url);
  // 回傳解析
  const fullPost = await fullPostResponse.json();
  document.querySelector('.post-content').textContent = fullPost.content
  descriptionDiv.classList.add('hidden');

});

