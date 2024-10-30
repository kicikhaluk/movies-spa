import { default as DatePickerComp } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './date-picker.module.scss';

interface IDatePicker {
  name: string;
  onChange: (date: Date | null) => void;
  selected: Date | null;
}

const DatePicker = ({ name, onChange, selected }: IDatePicker) => {
  return (
    <DatePickerComp
      wrapperClassName={styles.datepicker}
      name={name}
      onChange={onChange}
      isClearable
      selected={selected}
      showYearPicker
      placeholderText='Year'
      dateFormat='yyyy'
    />
  );
};

export default DatePicker;
