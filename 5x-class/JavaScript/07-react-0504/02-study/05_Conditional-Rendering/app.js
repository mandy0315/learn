function UserGreeting(props){
  return <h1 className="user">{props.name}登入成功</h1>
}
function GuestGreeting() {
  return <h1 className="guest">Please sign up.</h1>;
}

function App(){
  //*
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const atClick = () =>{
    setLoggedIn(!isLoggedIn);
  }
  return(
    <div className="app">
      <button onClick={atClick}>{isLoggedIn ? '登出' : '登出'}</button>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      {/* &&  */}
      {isLoggedIn && <UserGreeting name="mandy" />}
      {/* {isLoggedIn ? <UserGreeting name="mandy" /> : null} */}
    </div>
  )
  // */
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);