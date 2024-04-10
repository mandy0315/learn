window.addEventListener('DOMContentLoaded', async () => {
  let data = await fetchArea();

  input.addEventListener('input',(e) => {
    let result = '',
        ul = document.querySelector('ul');
    let inputValue = e.target.value;

    data.forEach(item => {
      let area = item.name.slice(0,2);
      if( inputValue === area ){
        result = readerView(item,ul,result)
      }
    });
    ul.innerHTML = result;
  })
})

async function fetchArea() {
  let response = await fetch('https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json',{})
  let responseJson = await response.json();
  return responseJson
}

function readerView(item,ul,result){
  ul.innerHTML = '';
  item.districts.forEach( innerArea => {
    return result = result + `
    <li>${item.name + innerArea.name}</li>
    `
  })
  return result
}