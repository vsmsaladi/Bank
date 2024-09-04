import React, { useState } from 'react';
import axios from 'axios';
import './WithdrawMoney.css';
function WithdrawMoney() {
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState('');

    const handleWithdraw = async () => {
        try {
            // Perform withdrawal
            const response = await axios.post(`https://fp2j79i1i8.execute-api.us-east-1.amazonaws.com/todraw`, null, {
                params: { amount: parseFloat(amount) }
            });

            // Update balance
            setBalance(response.data.balance);
            setError('');
        } catch (err) {
            setError('Error during withdrawal');
        }
    };

    return (
        <div>
            <h2>Withdraw Money</h2>
            <input
                type="text"
                placeholder="Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleWithdraw}>Withdraw</button>
            {balance !== null && <p>Updated Balance: {balance}</p>}
            {error && <p>{error}</p>}
        </div>
    );
}

export default WithdrawMoney;
