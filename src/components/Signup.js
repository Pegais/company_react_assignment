import React,{useState} from 'react'
import "./signup.css"
import { Link } from "react-router-dom"

function Signup() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [name, setName] = useState('');
    let [phone, setPhone] = useState('');
    let [profession, setProfession] = useState('');

    function handleClick() {
        
        let numphone = parseInt(phone)
        let data = {
            email: email,
            password: password,
            name: name,
            phone: phone,
            profession: profession
        }
        
        if (!email || !password || !name || !phone || !profession) {
            alert('Please enter all required information');
            return
        } else if (password.length < 6 || phone.length !== 10 ||typeof numphone !== 'number') {
            alert("invalid password or phone number")
            return;
        }
        localStorage.clear();
        data = JSON.stringify(data);
        localStorage.setItem('data', data);
       

    }
    return (
        <>
            <div className='register'>
                <div className='signup'>
                    <div className="name">
                        <input type="text" placeholder='Enter your name' onChange={(e) => { setName(e.target.value) }} value={name} />
                    </div>
                    <div className="email">
                        <input type="email" placeholder='Enter your email address' onChange={(e)=>{setEmail(e.target.value)} } value={email} />
                    </div>
                    <div className="password">
                        <input type="password" placeholder='Enter your password' onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    </div>
                    <div className="number">
                        <input type="tel" id="phone" name="phone" placeholder="1245678221" pattern="[0-9]{10}" required onChange={(e) => { setPhone(e.target.value) }} value={phone} />
                    </div>
                    <div className="profession">
                        <select name="profession" id="pro" onChange={(e)=>{setProfession(e.target.value)} } value={profession}>
                            <option selected disabled>Choose your profession</option>
                            <option value="Business">Businessman</option>
                            <option value="Student">Student</option>
                            <option value="salaried">Salaried employee</option>
                            
                        </select>
                    </div>
                    <div>
                        <input type="submit" onClick={handleClick}/>
                    </div>
                    <span>Already signed up?
                    <Link to="/login">
                      Login
                      </Link>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Signup