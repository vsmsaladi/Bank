import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Ensure the correct path to Home.js
import CreateAccount from './components/CreateAccount'; // Ensure the correct path to CreateAccount.js
import CheckBalance from './components/CheckBalance'; // Ensure the correct path to CheckBalance.js
import DepositMoney from './components/DepositMoney'; // Ensure the correct path to DepositMoney.js

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/check-balance" element={<CheckBalance />} />
                <Route path="/deposit-withdraw" element={<DepositMoney />} />
            </Routes>
        </Router>
    );
}

export default App;
