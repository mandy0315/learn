
// 舊語法

class MyComponent extends React.Component{
  render(){
    return(
      <div className="my-component">
        這是ReactComponent組件
      </div>
    )
  }
}
function FunctionalComponent() {
  return(
    <div className="functional-component">
      這是組件
      <br />
      今天日期：
      {/* 在 react 的 JSX 執行 JS 需要用花括號包起來 */}
      {
        new Date().toDateString()
      }
    </div>
  )
}

ReactDOM.render(
  <div>
    <MyComponent />
    <FunctionalComponent />
  </div>
  ,
  document.getElementById('app')
)
// TODO:3 end