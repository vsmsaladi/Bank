import React, { useState } from 'react';
import axios from 'axios';

function CheckBalance() {
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState(null);

    const handleCheck = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/accounts/${accountNumber}/balance`);
            setBalance(response.data);
        } catch (error) {
            alert('Error fetching balance');
        }
    };

    return (
        <div>
            <h1>Check Balance</h1>
            <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="Account Number" />
            <button onClick={handleCheck}>Check Balance</button>
            {balance !== null && <p>Balance: ${balance}</p>}
        </div>
    );
}

export default CheckBalance;
