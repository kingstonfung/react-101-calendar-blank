import React from 'react';

import UserInput from 'components/UserInput';
import Calendar from 'containers/Calendar';

import performStockLookup from 'performStockLookup';

class App extends React.Component {
    state = {
        loading: false,
        stocks: [],
        selectedDay: null,
        displayList: [],
        lastEnteredValue: '',
    }

    onTickerSubmit = async () => {
        this.setState({ loading: true });
        const userEnteredValue = document.querySelector('#tickersInput').value;

        if (userEnteredValue === this.state.lastEnteredValue) {
            this.setState({ loading: false });
            return;
        }

        const stocks = await performStockLookup(userEnteredValue);
        this.setState({
            loading: false,
            lastEnteredValue: userEnteredValue,
        });
    }

    render() {
        return (
            <>
                <UserInput
                    onTickerSubmit={this.onTickerSubmit}
                    loading={this.state.loading}
                />
                <Calendar
                    stocks={this.state.stocks}
                />
            </>
        );
    }
}

export default App;
