import React,{useState} from 'react'
import "./header.css"
import { Link} from "react-router-dom"

function Header() {
    let [toggle, setToggle] = useState(false)
    
    function handleClick() {
        setToggle(!toggle)
    }
  return (
      <div className="header">
          <div className='menu'>
              <div>
                  <Link to="/">
                  Logout
                  </Link>
              
              </div>
          <div onClick={handleClick}>Click to view company info </div>
              
          </div>

          {
              toggle ?
                  <div className="info">
              <div>
                  <span>Company: Geeksynergy Technologies Pvt Ltd</span>
              </div>
              <div>
                  <span>Address: Sanjayanagar, Bengaluru-56</span>
                  <span style={{marginLeft: "5px"}}> Phone: XXXXXXXXX09</span>
                  <span style={{marginLeft: "5px"}}>Email: XXXXXX@gmail.com</span>
              </div>
              <div>
                 
              </div>
              </div>
                  :<></>
          }

          
    </div>
  )
}

export default Header