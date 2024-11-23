import React, { useState } from 'react'; 
import { useNavigate, Link } from 'react-router-dom';
import '../signin.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState(''); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!name || !email || !password || !phone) {
            setError('Tous les champs sont obligatoires.');
            setLoading(false);
            return;
        }

        try {
        
            const user = { name, email, password, phone }; 

            const existingUsers = JSON.parse(localStorage.getItem('customers')) || [];

            existingUsers.push(user);

            localStorage.setItem('customers', JSON.stringify(existingUsers));

            setName('');
            setEmail('');
            setPassword('');
            setPhone(''); 

            navigate('/'); 
        } catch (error) {
            setError('Une erreur est survenue. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signin-page">
            <form onSubmit={handleSubmit}>
                <h1 id='sbr'>S'inscrire</h1>

                <input
                    id='inp'
                    type="text"
                    placeholder="  Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br />

                <input
                    id='inp'
                    type="email"
                    placeholder="  E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />

                <input
                    id='inp'
                    type="password"
                    placeholder="  Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />

                <input
                    id='inp'
                    type="tel"
                    placeholder="  Numéro de téléphone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <br />

                <input
                    id="submit-btn"
                    type="submit"
                    value={loading ? 'Création de votre compte...' : 'Créer votre compte'}
                    disabled={loading}
                />

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <p>
                    Vous avez déjà un compte ? <Link to="/login">LOGIN</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
