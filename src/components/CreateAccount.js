import React, { useState } from 'react';
import axios from 'axios';
import './CreateAccount.css'
function CreateAccount() {
    const [accountNumber, setAccountNumber] = useState('');
    const [initialBalance, setInitialBalance] = useState('');

    const handleSubmit = async () => {
        try {
            await axios.post('http://banking-env-1.eba-tcavr6ba.us-east-1.elasticbeanstalk.com/accounts/create', {
                accountNumber,
                initialBalance
            });
            alert('Account created successfully!');
        } catch (error) {
            alert('Error creating account');
        }
    };

    return (
        <div>
            <h1>Create Account</h1>
            <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="Account Number" />
            <input type="number" value={initialBalance} onChange={(e) => setInitialBalance(e.target.value)} placeholder="Initial Balance" />
            <button onClick={handleSubmit}>Create Account</button>
        </div>
    );
}

export default CreateAccount;
