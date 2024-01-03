import { object, string, number, date, InferType } from 'yup';

import { useState } from "react"
import { SignUpApi } from '../allApi/api';



let userSchema = object({
    name: string().min(2).max(15).required(),
    email: string().email().required(),
    password: 
    string()
    .required('Please Enter your password')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "PassWord Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    confirmPassword: string().required().test('confirmPassword', 'Password not matching', function(confirmPassword){
        return(confirmPassword == this.parent.password)
    })
});

export const SignUpPage = () => {
    const [values, setValues] = useState({
        name : "",
        email:"",
        password: "",
        confirmPassword: ""
    })
    const [errors,setErrors] = useState([])

    const handleOnChange = (key, value) => {
        setValues({
            ...values,
            [key] : value
        })
    }
    const handleSubmit = () => {
        userSchema.validate(values, {abortEarly: false})
        .then((res) => {
            setErrors([])

            SignUpApi({
                name: values.name,
                email: values.email,
                password: values.password
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })

        }).catch((err) => {
            setErrors(err.errors)
        })
    }

    return(
        <div className="page">
        <h1>Create an Account here!!!</h1>
        <div className="main">
            <form className="card">
                <div className="child1">
                    <label for="name">Name:</label><br/>
                    <input 
                        type={"text"} 
                        id="name" 
                        name="name" 
                        placeholder="Enter your Name" 
                        value={values.name}
                        onChange={(event) => {
                            if (event.target.value.includes(' ')) return;
                            const val = event.target.value
                            handleOnChange('name', val)
                        }}

                    /><br/>
                    <label for="email">Email:</label><br/>
                    <input 
                        type={"email"}
                        id="email" 
                        name="email" 
                        placeholder="Email" 
                        value={values.email}
                        onChange={(event) => {
                            if (event.target.value.includes(' ')) return;
                            const val = event.target.value
                            handleOnChange('email', val)
                        }}
                    /><br/>
                    <label for="password">Password:</label><br/>
                    <input 
                        type={"password"} 
                        id="password" 
                        name="password" 
                        placeholder="Password" 
                        value={values.password}
                        onChange={(event) => {
                            if (event.target.value.includes(' ')) return;
                            const val = event.target.value
                            handleOnChange('password', val)
                        }}
                    /><br/>
                    <label for="confpassword">Confirm Password:</label><br/>
                    <input 
                        type={"password"} 
                        id="confpassword" 
                        name="confpassword" 
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={(event) => {
                            if (event.target.value.includes(' ')) return;
                            const val = event.target.value
                            handleOnChange('confirmPassword', val)
                        }} 
                    /><br/>
                    <input 
                        className='submit'
                        type={"button"}
                        value="Submit"
                        onClick={handleSubmit}
                    ></input>
                </div><br/>
                <div>
                <p style={{padding: 2, marginLeft: 20, marginTop: -5}}>
                  If Already Registered?<a href='/login'>Login Here</a>
                </p>
            </div>
                {
                    errors.map((err, index) => {
                        return <p className='errors' key={index}>**{err}**</p>
                    })
                }
            </form>
            
        </div>
        </div>
    )
}