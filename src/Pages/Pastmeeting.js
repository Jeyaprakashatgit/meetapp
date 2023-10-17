import { useState, useEffect } from "react";
import Meetingcard from "../Components/Meetingcard";

function PastMeeting() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetch('https://todo-23295-default-rtdb.firebaseio.com/meetings.json')
      .then(response => response.json())
      .then(data => {
        let tempMeeting = [];
        for (const key in data) {
          let meeting = {
            id: key,
            ...data[key]
          };
          tempMeeting.push(meeting);
        }
        setMeetings(tempMeeting);
      });
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="pages">
      <h1>Past Meetings</h1>
      <div className="comp">
        {meetings
          .filter(meeting => new Date(meeting.date) < new Date())
          .map(meeting => {
            const formattedDate = new Date(meeting.date).toLocaleString();
            return (
              <Meetingcard
                key={meeting.id}
                title={meeting.title}
                img={meeting.img}
                date={formattedDate}
                link={meeting.link}
              />
            );
          })}
      </div>
    </div>
  );
}

export default PastMeeting;
