window.addEventListener('DOMContentLoaded', () => {
  firstLoaded();
})
async function firstLoaded() {
  let jobData = await fetchJob();
  let pageCount = await Math.ceil(jobData.length / 5)
  // let pageJobs = calculateJobs(jobData,1);
  renderView(jobData,pageCount);
}
async function fetchJob() {
  let response = await fetch('https://job-list-9527.herokuapp.com/api/v1/jobs/job_info',{})
  let responseJson = await response.json();
  return responseJson.page
}
// function calculateJobs(allJobs,nowPage) {

// }
function renderView(jobs,pages) {
  createBaseElement(pages);
  createJobsElement(jobs);
}
function createBaseElement(pages) {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <div class="css-table">
      <div class="css-thead">
        <div class="css-tr">
          <div class="css-th">日期</div>
          <div class="css-th">職位名稱</div>
          <div class="css-th">薪資</div>
          <div class="css-th">公司名稱</div>
          <div class="css-th">公司地址</div>
        </div>
      </div>
      <div class="css-t-body">
      </div>
    </div>
    <div class="pagination">
      <span class="backpage hidden">上一頁</span>
      <span class="nextpage">下一頁</span>
      <span class="page-counter"> 1/${pages}頁<span>
    </div>
  `
}
function createJobsElement(jobs) {
  let jobBody = document.querySelector('.css-t-body');
  let result = '';
  jobs.forEach((job) =>{
    result = result + `
      <a class="css-tr" href=${job.link}>
        <div class="css-td">${job.date}</div>
        <div class="css-td">${job.name}</div>
        <div class="css-td">${job.salary}</div>
        <div class="css-td">${job.company_name}</div>
        <div class="css-td">${job.address}</div>
      </a>
    `
  });
  jobBody.innerHTML = result;
}