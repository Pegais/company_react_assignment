import React,{useState} from 'react'
import { Link,useNavigate } from "react-router-dom"
import './signup.css'

function Login() {
    let navigate = useNavigate();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [name, setName] = useState('');
    function handleClick() {
        if (!email || !password || !name) {
            alert('please enter all required fields.')
            return;
        }
        let registeredData = localStorage.getItem('data');
        registeredData = JSON.parse(registeredData);
        if (email !== registeredData.email || password!== registeredData.password || name!== registeredData.name) { 
            alert('invalid credentials');
        }
        // console.log("go to go");
        navigate("/cards")
    }
  return (
      <>
          <div className='register'>
                <div className='login'>
                    <div className="name">
                      <input type="text" placeholder='Enter your name' onChange={(e) => { setName(e.target.value) }} value={name} />
                    </div>
                    <div className="email">
                        <input type="email" placeholder='Enter your email address'  onChange={(e) => { setEmail(e.target.value) }}  value={email} />
                    </div>
                    <div className="password">
                      <input type="password" placeholder='Enter your password' onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    </div>
                    
                    <div>
                        <input type="submit" onClick={handleClick}/>
                  </div>
                  <span>New user?
                      <Link to="/">
                      Signup
                      </Link>
                  </span>
                </div>
            </div>
      </>
  )
}

export default Login