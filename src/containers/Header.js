import React from 'react';

import styles from './Header.module.scss';

class Header extends React.Component {
    state = {
        month: this.props.month,
    }

    previous = () => {
        // const month = this.state.month;
        const { month } = this.state;
        this.setState({
            month: month.subtract(1, 'month'),
        });
    }

    next = () => {
        const { month } = this.state;
        this.setState({
            month: month.add(1, 'month'),
        });
    }

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.monthDisplay}>
                    <span onClick={this.previous}> P </span>
                    { this.state.month.format('MMMM YYYY') }
                    <span onClick={this.next}> N </span>
                </div>
            </header>
        )
    }
}

export default Header;