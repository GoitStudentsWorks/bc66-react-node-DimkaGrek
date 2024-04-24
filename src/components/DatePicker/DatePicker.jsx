import s from './DatePicker.module.css';
import { forwardRef, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Icon } from '../Icon/Icon';

const DatePickerForm = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <button onClick={onClick} ref={ref} className={s.btn}>
        {format(selectedDate, 'EEEE, MMMM d')}
        <Icon id="down" className={s.icon} size={18} />
      </button>
    );
  });
  CustomInput.displayName = 'CustomInput';

  const formatDateToISOString = date => {
    return date.toISOString();
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    const formattedDate = formatDateToISOString(date);
    onDateChange(formattedDate);
  };
  return (
    <>
      <DatePicker
        toggleCalendarOnIconClick
        calendarClassName={s.datapicker}
        selected={selectedDate}
        onChange={handleDateChange}
        customInput={<CustomInput />}
        dateFormat={'EEEE, MMMM d'}
        calendarStartDay={1}
      />
    </>
  );
};

export default DatePickerForm;
