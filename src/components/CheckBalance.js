import React, { useState } from 'react';
import axios from 'axios';
import './CheckBalance.css'
function CheckBalance() {
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState(null);

    const handleCheckBalance = async () => {
        try {
            const response = await axios.post('https://fp2j79i1i8.execute-api.us-east-1.amazonaws.com/post1/create', { accountNumber });
            setBalance(response.data.balance);
        } catch (err) {
            setError('Error fetching account balance');
            console.error(err);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={accountNumber} 
                onChange={(e) => setAccountNumber(e.target.value)} 
                placeholder="Enter Account Number" 
            />
            <button onClick={handleCheckBalance}>Check Balance</button>
            {balance !== null && <div>Balance: ${balance}</div>}
            {error && <div>{error}</div>}
        </div>
    );
}

export default CheckBalance;
