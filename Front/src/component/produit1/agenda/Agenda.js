import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './agenda.css';
import Agendaicon from '../../../assets/iconAgenda.svg'

const Agenda = ({ onStartDateChange, onEndDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const datePickerRef = useRef(null);

  const formatDate = (date) => {
    return date ? new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0] : null;
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onStartDateChange(formatDate(start));
    onEndDateChange(formatDate(end));
  };

  const handleCancel = () => {
    setStartDate(null);
    setEndDate(null);
    onStartDateChange(null);
    onEndDateChange(null);
  };

  const handleApply = () => {
    datePickerRef.current.setOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center' }}>
      <div className="date-picker-container">
        <div className="date-picker">
          <DatePicker
            dateFormat="MMMM d, yyyy"
            placeholderText={"Select Date Range"}
            showIcon
            toggleCalendarOnIconClick
            selected={startDate}
            onChange={(date) => handleDateChange(date)}
            selectsRange
            startDate={startDate}
            endDate={endDate}
            showMonthDropdown
            showYearDropdown
            scrollableYearDropdown
            shouldCloseOnSelect={false}
            ref={datePickerRef}
            icon={<img className='iconTextInput' src={Agendaicon} alt="Agenda Icon" />}
            fixedHeight
          >
            <div className='AgendaSelect'>Select</div>
            <div className='iconeAgenda'>{<img className='iconTextInput' src={Agendaicon} alt="Agenda Icon" />}</div>
            <div className="agendaButtons">
              <button className='agendaCancel' onClick={handleCancel}>Cancel</button>
              <button className='agendaApply' onClick={handleApply}>Apply</button>
            </div>
          </DatePicker>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
