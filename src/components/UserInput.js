import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './UserInput.module.scss';

export default (props) => (
    <div className={styles.inputWrapper}>
        <TextField
            id="tickersInput"
            className={styles.tickerInput}
            label="Enter Ticker Symbols"
            variant="outlined"
            defaultValue="FB, AAPL, AMZN, NFLX, GOOGL"
        />
        <Button
            className={[
                styles.searchButton,
                props.loading ? styles.loading : null,
            ].join(' ')}
            variant="contained"
            color="primary"
            onClick={() => {
                if (!props.loading) props.onTickerSubmit();
            }}
        >
            {
                props.loading
                ? <FontAwesomeIcon icon={faSpinner} size="lg" spin />
                : 'Search'
            }
        </Button>
    </div>
);
