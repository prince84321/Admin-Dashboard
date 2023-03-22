import "./navbar.css";
import { AccountCircle, Notifications} from "@mui/icons-material";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";

function Navbar() {
  
  const [selectCountry, setSelectCountry] = useState("");

  const states = {
    India : ['Maharastra', 'Gujrat', 'Asam', 'gualior'],
    USA: ['California', 'New York'],
    USA1: ['California', 'New York'],
    USA2: ['California', 'New York'],
  }
  const country = Object.keys(states);

  return (
    <div className='navbar'>
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <div className="navbar-left">
                <img src="/assets/logo.png"
                alt="logo"
                className="logo" />
                </div>
                <div className="navbar-right">
            <Dropdown>
                 <Dropdown.Toggle className="custom-button" id="dropdown-basic">
                    Login As
                  </Dropdown.Toggle>
                  {country.map((item, index)=>(
              <Dropdown.Menu key={index}>
                   <Dropdown.Item href="#">{item}</Dropdown.Item>
                   {/* <Dropdown.Item href="#" >Another action</Dropdown.Item>
                   <Dropdown.Item href="#">Something else</Dropdown.Item>
                   <Dropdown.Item href="#">Something else</Dropdown.Item>
                   <Dropdown.Item href="#">Something else</Dropdown.Item>
                   <Dropdown.Item href="#">Something else</Dropdown.Item>
                  <Dropdown.Item href="#">Something else</Dropdown.Item> */}
                 </Dropdown.Menu>
                   ))}
            </Dropdown>
            <Dropdown>
                 <Dropdown.Toggle className="custom-button" id="dropdown-basic">
                   Select User
                  </Dropdown.Toggle>

                 <Dropdown.Menu>
                   <Dropdown.Item href="#"> {country}</Dropdown.Item>
                   <Dropdown.Item href="#">Another action</Dropdown.Item>
                   <Dropdown.Item href="#">Something else</Dropdown.Item>
                   <Dropdown.Item href="#">Something else</Dropdown.Item>
                 </Dropdown.Menu>
            </Dropdown>
                    <span className="navbar-right-wallet">Wallet</span>
                    <Notifications className="navbar-righ-icon"/>
                    <span className="navbar-right-wallet">Admin MIS1</span>
                    <AccountCircle className="navbar-right-user" />
                </div>
            </div>
        </div>
    </div>
  )
}
export default Navbar;
                        
