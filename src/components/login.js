function Login() {
    return (
        <div className='login'>
            <p>Login</p>
            <input type="text" placeholder="E-Mail" id="email"></input>
            <br/>
            <input type="text" placeholder="Password" id="password"></input>
            <br />
            <button>Submit</button>
        </div>
    );
}

export default Login;