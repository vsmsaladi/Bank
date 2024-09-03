import React, { useState } from 'react';
import axios from 'axios';
import './DepositMoney.css';

function DepositMoney() {
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [operation, setOperation] = useState('deposit');

    const handleSubmit = async () => {
        try {
            if (operation === 'deposit') {
                await axios.post(`http://localhost:8080/accounts/${accountNumber}/deposit`, null, { params: { amount } });
            } else {
                await axios.post(`http://localhost:8080/accounts/${accountNumber}/withdraw`, null, { params: { amount } });
            }
            alert('Operation successful!');
        } catch (error) {
            alert('Error with operation');
        }
    };

    return (
        <div>
            <h1>Deposit/Withdraw</h1>
            <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="Account Number" />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="deposit">Deposit</option>
                <option value="withdraw">Withdraw</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default DepositMoney;
