import { RxDashboard } from "react-icons/rx";
import { FaCalendarDays } from "react-icons/fa6";
import { LuUserSquare } from "react-icons/lu";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { FaBookMedical } from "react-icons/fa6";
import { MdOutlineCalendarViewMonth } from "react-icons/md";
import "./index.css"
import LeaveScheduler from "../LeaveScheduler";

const EmpDashboard = () => {
    return(
        <div className="emp-dashboard">
            <div className="emp-sidebar">
                <button className="emp-sidebar-user-name"><FaRegCircleUser className="emp-sidebar-name-icon" /> Ramarao Kalinga</button>
                <button className="emp-sidebar-name"><RxDashboard className="emp-sidebar-icon" /> Dashboard</button>
                <button className="emp-sidebar-name"><LuUserSquare  className="emp-sidebar-icon"/> Attendance</button>
                <button className="emp-sidebar-name"><DiGoogleAnalytics className="emp-sidebar-icon" /> Shedule</button>
                <button className="emp-sidebar-name"><FaCalendarDays className="emp-sidebar-icon" /> Calander</button>
            </div>
            <div>
                <div className="emp-dashboard-topbar">
                    <MdOutlineFormatLineSpacing  className="emp-topbar-icon"/>
                    <button className="emp-topbar-user-name"><FaRegCircleUser className="emp-dashboard-name-icon" /> Ramarao Kalinga</button>
                </div>
                <div className="emp-dashboard-bottom-section">
                    <div className="emp-dashboard-bottom-cards card-1">
                        <p className="emp-dashboard-bottom-card-name">Shadule Leave</p>
                        <FaBookMedical className="emp-dashboard-card-icon" />
                    </div>
                    <div className="emp-dashboard-bottom-cards card-2">
                        <p className="emp-dashboard-bottom-card-name">Calander</p>
                        <FaCalendarDays className="emp-dashboard-card-icon" />
                    </div>
                    <div className="emp-dashboard-bottom-cards card-3">
                        <p className="emp-dashboard-bottom-card-name">Attendance</p>
                        <MdOutlineCalendarViewMonth className="emp-dashboard-card-icon" />
                    </div>
                    <div className="emp-dashboard-bottom-cards card-4">
                        <p className="emp-dashboard-bottom-card-name">Shadule Leave</p>
                        <FaCalendarDays className="emp-dashboard-card-icon" />
                    </div>
                </div>
                <LeaveScheduler />
                {/* <img alt="Calander" className="emp-dashboard-calander-image" src="/Images/calander.png"/> */}
            </div>
        </div>
    )
}

export default EmpDashboard