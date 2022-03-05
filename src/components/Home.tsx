import React from 'react';
import { MouseEvent, useState } from 'react';
import { Weekday, Date } from '../../types';
import { Weekdays } from '../configs/Weekdays';
import { monthDates } from '../configs/Monthdays';
import { ChevronLeftIcons } from '../assets/Icons/ChevronLeftIcons'
import { ChevronRightIcons } from '../assets/Icons/ChevronRightIcons'

export const Calender: React.FC <{}> = ({}) => {

    const [selectedDate, setselectedDate] = useState <string | null>();
    const handlechange = (e: MouseEvent<HTMLButtonElement>) => {
        setSelectedDate(e.currentTarget.getAttribute('value'));
    }

    const generateDates = (date:number) => {
        let selectedDateNumber: number = selectedDate ? parseInt(selectedDate) : 0;
        for (let i = 0; i <7, i++) {
            return<button className={`date ${date == 18 ? "today" : ""} ${date == selectedDateNumber ? "selected" : ""}`} onClick={handlechange} value ={date}><p>{date}</p></button>
        }
    }

    const generateWeeks = (dates:Array<Date>) => {
        let daysInWeek = 7;
        let tempArray = [];

        for (let i = 0; i < dates.length; i++) {
            tempArray.push(dates.slice(i, i+daysInWeek));
        }
        return tempArray;
    }

    return (
        <div className= "calender-container">
            <div className= "datepicker-container">
                <span>February 2022</span>
            </div>
            <div className= "weekdays-container">
                {Weekdays.map(day => (
                    <div className= "week-day">{day}</div>
                ))}

            </div>
            <div className="calender">
                {
                    generateWeeks(monthDates).map(week => (
                        <div className="week">
                            {week.map(day => (generateDates(day.day)))}
                        </div>

                    ))

                    }

                
                
            </div>

        </div>
    )

}