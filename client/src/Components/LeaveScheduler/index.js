import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the styles
import "./index.css"

const LeaveScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [leaveDates, setLeaveDates] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleScheduleLeave = () => {
    setLeaveDates((prevDates) => [...prevDates, selectedDate]);
    alert(`Leave scheduled for ${selectedDate.toDateString()}`);
  };


  const disablePastDates = ({ date }) => date < new Date();

  const highlightLeaveDays = ({ date }) =>
    leaveDates.some((d) => d.toDateString() === date.toDateString())
      ? 'highlight'
      : null;

  return (
    <div style={{ margin: '20px' }}>
      <h1>Employee Leave Scheduler</h1>
      <Calendar 
        onChange={handleDateChange} 
        value={selectedDate} 
        tileClassName={highlightLeaveDays}
        tileDisabled={disablePastDates}
      />
      <p>Selected Date: {selectedDate.toDateString()}</p>
      <button onClick={handleScheduleLeave}>Schedule Leave</button>
      <h2>Scheduled Leaves:</h2>
      <ul>
        {leaveDates.map((date, index) => (
          <li key={index}>{date.toDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeaveScheduler;
