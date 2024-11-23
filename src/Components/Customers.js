import React from 'react';
import './customers.css'; 

const Customers = () => {

    const customers = JSON.parse(localStorage.getItem('customers')) || [];

    return (
        <div>
            <h1>Gestion des clients</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Numero Tele</th>

                    </tr>
                </thead>
                <tbody>
                    {customers.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Customers;
