import React from 'react';
import { useNavigate } from 'react-router-dom'; // Update import
import './Home.css';

function Home() {
    const navigate = useNavigate(); // Use navigate hook

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="container">
            <header className="header">
                <h1>Welcome to Banking App</h1>
                <p>Your secure and reliable banking solution</p>
            </header>
            <main className="main">
                <section className="features">
                    <div className="feature" onClick={() => handleNavigate('/create-account')}>
                        <h2>Create Account</h2>
                        <p>Open a new account quickly and easily.</p>
                    </div>
                    <div className="feature" onClick={() => handleNavigate('/check-balance')}>
                        <h2>Check Balance</h2>
                        <p>View your account balance in real-time.</p>
                    </div>
                    <div className="feature" onClick={() => handleNavigate('/deposit-withdraw')}>
                        <h2>Deposit/Withdraw</h2>
                        <p>Manage your funds with ease.</p>
                    </div>
                </section>
                <section className="cta">
                    <h2>Get Started Now</h2>
                    <button className="button" onClick={() => handleNavigate('/create-account')}>Sign Up</button>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Banking App. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
