window.addEventListener('DOMContentLoaded',()=>{
  const ul = document.querySelector('ul');
  firstLoaded();
  async function firstLoaded() {
    let listData = await fetchData();
    let firstList = await listData.slice(0,10);
    viewReader(firstList);
  }
  async function fetchData(){
    let response = await fetch('https://pastleo-posts-api.herokuapp.com/api/posts',{})
    let jsonResponse = await response.json();
    return jsonResponse
  }
  function viewReader(arr){
    let result = '';
    arr.forEach(async (data) => {
      let content = await fetchDataContent(data);
      let el = await resultEl(data,content);
      result = result + el
      ul.innerHTML = result
    })
  }
  async function fetchDataContent(data){
    let response = await fetch(data.api_url)
    let jsonResponse = await response.json();
    let dataContent = jsonResponse.content
    return dataContent
  }
  function resultEl(data,content){
    return `
      <li class="max-w-3xl mx-auto px-4 divide-y divide-gray-200 sm:px-6 xl:max-w-5xl xl:px-0">
      <div class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
        <div class="text-base leading-6 font-medium text-gray-500 xl:mr-4">
          <span class="post-created-at">
            ${data.created_at}
          </span>
          <br class="hidden xl:inline" />
          <span class="mx-2 inline xl:hidden">|</span>
          <span class="post-author">
            ${data.author}
          </span>
        </div>
        <div class="space-y-5 xl:col-span-3">
          <div class="space-y-6">
            <h2 class="text-2xl leading-8 font-bold">
              <a target="_blank" class="post-title text-gray-900" href=${data.url}>
                ${data.title}
              </a>
            </h2>
            <pre class="post-content whitespace-pre-line max-w-none text-gray-800">
              ${content}
            </pre>
          </div>
        </div>
      </div>
    </li>
    `
  }


})
