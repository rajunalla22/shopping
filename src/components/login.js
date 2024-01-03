


export const LoginPage = () => {

    return(
        <div className="page">
        <h1>Create an Account here!!!</h1>
        <div className="main">
            <form className="card">
                <div className="child1">
                    <label for="email">Email:</label><br/>
                    <input 
                        type={"email"}
                        id="email" 
                        name="email" 
                        placeholder="Email" 
                    /><br/>
                    <label for="password">Password:</label><br/>
                    <input 
                        type={"password"} 
                        id="password" 
                        name="password" 
                        placeholder="Password" 
                    /><br/>
                    <input 
                        className='submit'
                        type={"button"}
                        value="Submit"
                    ></input>
                </div>
                <div><br />
                <p style={{padding: 2, marginLeft: 20, marginTop: -5}}>
                  If Not Already Registered?<a href='/signup'>Register Here</a>
                </p>
            </div>
            </form>
        </div>
            
        </div>
    )
}