import React from 'react';
import moment from 'moment';

import Header from './Header';

import generateWeeks from '../generateWeeks';
import stocksTimingFilter from '../stocksTimingFilter';

import styles from './Calendar.module.scss';

class Calendar extends React.Component {
    state = {
        month: moment(),
        selected: moment().startOf('day'),
    }

    changeMonth = (selectedDate) => {

    }

    render() {
        return (
            <section className={styles.calendar}>
                <Header month={this.state.month} />
            </section>
        );
    }
}

export default Calendar;