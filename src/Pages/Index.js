import { Link } from "react-router-dom";
import meetimg from "../assets/meetimg.avif"
function Index(){
  return(
  <div className="pages">
    <img src={meetimg} className="meetimg"></img>
    <h1> Organize Your <span className="title1"> Meetings</span>📆 </h1>
    <Link to='/add-meetings' className="addbtn">Add Meetings</Link>
  </div>
  )
}
export default Index;