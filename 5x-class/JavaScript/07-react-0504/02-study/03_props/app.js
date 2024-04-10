
// component 元件接受參數的唯一方法就是從 props 取得
function FunctionalCard(props) {
  const {
    img,name,children
  } = props
  return(
    <div className="card">
      <img className="img" src={img} />
      <div className="name">name{name}</div>
      <div className="quote">name{children}</div>
    </div>
  )
  
}
ReactDOM.render(
  // TODO2
  <div className="app">
    <FunctionalCard
      img="http://fakeimg.pl/300x100/ecf0f1/"
      name="mandy" />

    <FunctionalCard
      img="http://fakeimg.pl/240x80/ecf0f1/"
      name="敏佳">
      <h1>我是子元素</h1>
    </FunctionalCard>
  </div>
  ,
  document.getElementById('app')
);