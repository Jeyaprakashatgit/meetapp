import { Link } from "react-router-dom";
function Nav(){
  return(
    <div className="navbar">
      <Link to='/' className="mhead title1">Meetings</Link>
      <div className="meetdiv">
      <Link to='/upcoming-meetings' >Upcoming Meetings</Link>
      <Link to='/past-meetings'>Past Meetings</Link>
      <Link to='/add-meetings'>Add Meetings</Link>

    </div>
    </div>
  )
}
export default Nav;