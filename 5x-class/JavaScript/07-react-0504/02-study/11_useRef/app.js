function UseRefExample(){
  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(false);

  // useRef() 找DOM 元素
// TODO
  const refInput = React.useRef();

  const atShowClick = () => {
    // !show 布林相反 true
    setShow(!show);
    // console.log(refInput.current); // undefined
  }
  // 2.觀察變數有沒有更改
  React.useEffect(() => {
    console.log('count', count);
  }, [count]);

  React.useEffect(() => {
    if (show) {
      console.log(refInput.current); // correct
      refInput.current.focus();
    }
  }, [show]);

  
  return (
    <div className="ref-example-component">
      <section>
        <button onClick={atShowClick}>show input</button>
        <button onClick={()=> setCount(count+1)}>+1</button>
        {
          show && <input ref={refInput} />
        }
      </section>
    </div>
  );
}

ReactDOM.render(
  <UseRefExample />,
  document.getElementById('app')
);
