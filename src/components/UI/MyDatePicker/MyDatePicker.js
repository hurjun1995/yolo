import React from 'react'
import DatePicker from 'react-native-datepicker'

const datePickerCustomStyle = {
  dateInput: { borderWidth: 0, alignItems: 'flex-end', height: 20 },
  dateTouchBody: { height: 20 },
}

const MyDatePicker = props => (
  <DatePicker
    showIcon={false}
    customStyles={datePickerCustomStyle}
    cancelBtnText="Cancel"
    confirmBtnText="Confirm"
    {...props}
  />
)

export default MyDatePicker
