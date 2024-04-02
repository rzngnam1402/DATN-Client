import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, PickersDay } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';

function CustomDatePicker({ value, onChange }) {
    const renderDay = (day, selectedDates, pickersDayProps) => {
        const isPastDate = day < new Date().setHours(0, 0, 0, 0);

        return (
            <PickersDay
                {...pickersDayProps}
                disabled={isPastDate}
                sx={{
                    ...(isPastDate && {
                        filter: 'blur(2px)',
                        opacity: 0.5,
                    }),
                }}
            />
        );
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                value={value}
                onChange={onChange}
                renderInput={(params) => <TextField
                    fullWidth
                    {...params} />}
                renderDay={renderDay}
                disablePast
            />
        </LocalizationProvider>
    );
}
export default CustomDatePicker
