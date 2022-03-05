import React from 'react';
import { Calender } from './Home';

export const DatePicker: React.FC <{}> = ({}) => {
    return (
        <div className= "date-picker-container">
            <div className= "background-container"></div>
            <Calender/>
        </div>
    )

}