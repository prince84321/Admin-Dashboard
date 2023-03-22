import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className='dashboard'>
        <Navbar />
        <div className="section">
        <Leftbar />
        <Rightbar />
        </div>
    </div>
  )
}

export default Dashboard;