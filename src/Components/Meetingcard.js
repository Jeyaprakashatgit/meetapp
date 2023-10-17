function Meetingcard(props){
  return(
    <div className="meetdiv" >
       <a className="meeting-card" href={props.link} target="_blank">
      <img src={"https://source.unsplash.com/1600x800/?"+props.img} ></img>
      <h3>{props.title}</h3>
      <p>{props.date}</p>
    </a>
    </div>
   
  )
}
export default Meetingcard;