import React, { useState } from 'react';
import './GeneralSettings.css'

const GeneralSettings = () => (
  <div>
    <h3>Paramètres Généraux</h3>
    <div>
      <label>
        Langue:
        <select>
          <option value="fr">Français</option>
          <option value="en">Anglais</option>
          <option value="ar">Arabe</option>
        </select>
      </label>
    </div>
    <div>
      <label>
        Thème:
        <select>
          <option value="light">Clair</option>
          <option value="dark">Sombre</option>
        </select>
      </label>
    </div>
  </div>
);

const NotificationSettings = () => (
  <div>
    <h3>Paramètres de Notifications</h3>
    <div>
      <label>
        Notifications par email:
        <input type="checkbox" />
      </label>
    </div>
    <div>
      <label>
        Notifications par SMS:
        <input type="checkbox" />
      </label>
    </div>
  </div>
);

const AccountSettings = () => (
  <div>
    <h3>Paramètres du Compte</h3>
    <div>
      <label>
        Nom d'utilisateur:
        <input type="text" placeholder="Nom d'utilisateur" />
      </label>
    </div>
    <div>
      <label>
        Mot de passe:
        <input type="password" placeholder="Mot de passe" />
      </label>
    </div>
  </div>
);

const SittingPage = () => {
  const [settings, setSettings] = useState({
    language: 'fr',
    theme: 'light',
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleSaveSettings = () => {
    
    console.log('Paramètres enregistrés:', settings);
  };

  return (
    <div className="sitting-page">
      <h1>Paramètres du Dashboard</h1>

      
      <GeneralSettings />

      
      <NotificationSettings />

      
      <AccountSettings />

      
      <div>
        <button onClick={handleSaveSettings}>Enregistrer les paramètres</button>
      </div>
    </div>
  );
};

export default SittingPage;
