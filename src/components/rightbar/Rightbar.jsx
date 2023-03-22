import "./rightbar.css";
import {Store} from "@mui/icons-material";
import {Dropdown} from "react-bootstrap";
import Charts from "../charts/Charts";

function Rightbar() {
  return (
    <div className="rightbar"> 
      <div className="rightbar-wrapper">
          <div className="rightbar-top">
            <h2>Dashboard</h2>
            <div className="rightbar-card-container" title="view">
             <div className="rightbar-card-parant">
              <div className="rightbar-card-child-1">
                <Store className="righbar-icon"/>
              </div>
              <div className="hover-effect"></div>
              <div className="rightbar-card-child-2">

              <span>Franchise</span>
              <p>85</p>
              </div>
             </div>
             <div className="rightbar-card-parant" id="parant-1">
              <div className="rightbar-card-child-1" id="child-1">
                <Store className="righbar-icon"/>
              </div>
              <div className="rightbar-card-child-2">

              <span>Driver</span>
              <p>687</p>
              </div>
             </div>
             <div className="rightbar-card-parant" id="parant-2">
              <div className="rightbar-card-child-1" id="child-2">
                <Store className="righbar-icon"/>
              </div>
              <div className="rightbar-card-child-2">

              <span>Products</span>
              <p>26</p>
              </div>
             </div>
             <div className="rightbar-card-parant" id="parant-3">
              <div className="rightbar-card-child-1" id="child-3">
                <Store className="righbar-icon"/>
              </div>
              <div className="rightbar-card-child-2">

              <span>Assets Alloted</span>
              <p>326</p>
              </div>
             </div>
             <div className="rightbar-card-parant" id="parant-4">
              <div className="rightbar-card-child-1" id="child-4">
                <Store className="righbar-icon"/>
              </div>
              <div className="rightbar-card-child-2">

              <span>Ticket Raise</span>
              <p>17</p>
              </div>
             </div>
             <div className="rightbar-card-parant" id="parant-5">
              <div className="rightbar-card-child-1" id="child-5">
                <Store className="righbar-icon"/>
              </div>
              <div className="rightbar-card-child-2">

              <span>Leave Count</span>
              <p>101</p>
              </div>
             </div>
            </div>
          </div>

   {/* //============Rightbar Center==========// */}

          <div className="rightbar-center">
            <div className="rightbar-center-container">
          
            <div className="rightbar-center-top">
              <h3>Franchise</h3>
              <div className="rightbar-center-top-dropdown">

              <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
     </Dropdown>
        <Dropdown>
         <Dropdown.Toggle id="dropdown-basic">
           current
         </Dropdown.Toggle>

         <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
              </div>
            </div>  
            <hr />   
            <Charts />
            </div>
            <div className="rightbar-center-container">
          
            <div className="rightbar-center-top">
              <h3>Franchise</h3>
              <div className="rightbar-center-top-dropdown">

              <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
     </Dropdown>
        <Dropdown>
         <Dropdown.Toggle id="dropdown-basic">
           current
         </Dropdown.Toggle>

         <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
              </div>
            </div>  
            <hr />   
            <Charts />
            </div>
          </div>

          {/* //==========>RIGHTBAR BUTTOM<===========// */}

          <div className="rightbar-buttom"></div>
      </div>
    </div>
  )
}

export default Rightbar;