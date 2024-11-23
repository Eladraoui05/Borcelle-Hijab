import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../signin.css'; 

const Login = () => {
    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState('');  
    const [error, setError] = useState('');  

    const navigate = useNavigate();  

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === username && storedUser.password === password) {
            console.log('Utilisateur connecté');
            navigate('/'); 
        } 
        else if (username === 'admin' && password === 'admin') {
            console.log('Administrateur connecté');
            navigate('/dashboard'); 
        } else {
            setError('Nom d\'utilisateur ou mot de passe incorrect.');
        }
    };

    return (
        <div className="signin-page">
            <form onSubmit={handleSubmit}>
                <h1 id='sbr'>LOGIN</h1>
                
                <input
                    id='inp'
                    type="text"
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br />
                
                <input 
                    id='inp'
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                
                <input 
                    id="submit-btn"
                    type="submit"
                    value="LOGIN"
                />
                
                {error && <p style={{ color: 'red' }}>{error}</p>} 
                
                <p>
                    Vous n'avez pas de compte ? <Link to="/signin">S'inscrire</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
