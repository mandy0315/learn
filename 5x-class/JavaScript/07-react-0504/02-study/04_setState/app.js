/**
  放兩個 Counter Component
  一個 count 為 0
  另一個 count 為 1
 */

function Counter(props){
  // let arr = useState()
  // let count = arr[0]
  // let setCount = arr[1]
  const {
    initCount = 0,
  } = props;

  // useState 私有變數 ; 
  let [count, setCount] = React.useState(initCount);
  const atClick = () =>{
    setCount(count + 1);
  }
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count">{count}</div>
      <button className="my-btn" onClick={atClick}>+1</button>
    </div>
  )

}

ReactDOM.render(
  <div>
    <Counter initCount={0} />
    <Counter initCount={1} />
  </div>,
  document.getElementById('app')
);