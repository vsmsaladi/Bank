import React, { useState } from 'react';
import axios from 'axios';

function CreateAccount() {
    const [accountNumber, setAccountNumber] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:8080/accounts/create', { accountNumber, name });
            alert('Account created successfully!');
        } catch (error) {
            alert('Error creating account');
        }
    };

    return (
        <div>
            <h1>Create Account</h1>
            <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="Account Number" />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <button onClick={handleSubmit}>Create Account</button>
        </div>
    );
}

export default CreateAccount;
