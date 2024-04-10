function InputSignIn(){
  const [userNameValue,setUserNameValue] = React.useState('');
  const [passwordValue,setPasswordValue] = React.useState('');
  const SignMem = async (e) => {
    e.preventDefault();
    // submit 停止再按
    e.currentTarget.lastElementChild.disable = true;
    const response = await fetch('./api/login',{
      method: 'POST',
      headers: {'Authorization':'...'},
      body: {
        user_name: `${userNameValue}`,
        password: `${passwordValue}`
      }
    })
    if(response.ok){
      const nodeListInput = [...e.currentTarget.querySelectorAll('input')];
      nodeListInput.forEach( text => {
        text.value = ''
      })
      window.location.href = "../index.html"
    }else{
      const nodeListError = [...e.currentTarget.querySelectorAll('.error')];
      const errors = await request.json();
      nodeListError.forEach(errorSpan => {
        const errorMsgs = errors[errorSpan.parentNode.htmlFor];
        if (errorMsgs) {
          errorSpan.textContent = errorMsgs
        }
      });
    }
    setTimeout(() => {
      submitBtn.disabled = false
    }, 2000);
  }
  return(
    <form onSubmit={ SignMem }>
      <label htmlFor="userName"><span className="error"></span></label>
      <input
        type="text"
        id="userName"
        onChange={ function(e){
          setUserNameValue(e.currentTarget.value);
        }}
      />
      <label htmlFor="password"><span className="error"></span></label>
      <input
        type="password"
        id="password"
        onChange={ function(e){
          setPasswordValue(e.currentTarget.value);
        }}
      />
      <div
        style={{ display: 'block' }}
      >
        <label><input type="checkbox" name="checkbox" />Remember Me</label>
        <a
          href="../forgot-password.html"
          style={{
            display: 'inline-block',
            color: 'red',
            textDecoration: 'none',
          }}
        >Forgot Password?</a>
      </div>
      <button type="submit" className="btn-style">Submit</button>
    </form>
  );
};

function SocialSignIn(){
  return(
    <section>
      <h2>Login<br /><span>With your social media account</span></h2>
      <button
        className="btn-style twitter-btn"
        onClick={ function() {
          window.location.href = "./sso/twitter"
        }}
      >Twitter</button>
      <button
        className="btn-style fb-btn"
        onClick={ function() {
          window.location.href = "./sso/facebook"
        }}
      >Facebook</button>
      <button
        className="btn-style google-btn"
        onClick={ function() {
          window.location.href = "./sso/googleplus"
        }}
        >Google+</button>
    </section>
  );
};

function Register(){
  return(
    <div>
      <hr />
      <section>
        <p>Don’t have an Account? &nbsp;
          <span
            style={{
              color: 'red',
            }}
          >Register Now</span>
        </p>
        <button
          className="btn-style"
          onClick={ function() {
            window.location.href = "./signin/register"
          }}
        >Register</button>
      </section>
    </div>
  );
};

ReactDOM.render(
  <div>
    <h1>Login</h1>
    <InputSignIn/>
    <SocialSignIn/>
    <Register/>
  </div>
  ,
  document.getElementById('app')
);
