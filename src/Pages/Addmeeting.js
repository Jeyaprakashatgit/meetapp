import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Addmeeting() {
  // let [loadingStatus, setLoadingStatus] = useState(false);
  let titleInput = useRef();
  let imgInput = useRef();
  let linkInput = useRef();
  let dateInput = useRef();
  let navigate = useNavigate();

  function addMeetingHandler() {
    // setLoadingStatus(true)
    let tempmeeting = {
      title: titleInput.current.value,
      img: imgInput.current.value,
      link: linkInput.current.value,
      date: dateInput.current.value,
    };

   
    fetch('https://todo-23295-default-rtdb.firebaseio.com/meetings.json', {
      method: 'post',
      body: JSON.stringify(tempmeeting),
    }).then(() => {
      // setLoadingStatus(false);
      navigate('/upcoming-meetings')
      
    });
  }

  return (
    <div className="pages">
      <h1>Add Details of your upcoming meetings</h1>
      <div className="inputdiv">
      <input type="text" ref={titleInput} placeholder="Enter the meeting name" />
      <input type="text" ref={imgInput} placeholder="Enter the meeting image" />
      <input type="text" ref={linkInput} placeholder="Enter the meeting link" />
      <input type="datetime-local" ref={dateInput} placeholder="Enter the meeting timings" />
      </div>
       

      <button className="addbtn" onClick={addMeetingHandler}> Add Meeting
       </button>
    </div>
  );
}

export default Addmeeting;
