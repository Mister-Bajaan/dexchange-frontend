// pages/post-agent.js
import { useState } from 'react';

const API_URL = "http://localhost:5050/user/postUser";

export default function PostAgent() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    status: '',
    phone: '',
    adresse: '',

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Envoyer une requête POST à l'API Express
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Réponse du serveur:', result);
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nom"
        placeholder="Nom"
        value={formData.nom}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="prenom"
        placeholder="Prénom"
        value={formData.prenom}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        required
      >
        <option value="">Status</option>
        <option value="actif">Actif</option>
        <option value="inactif">Inactif</option>
      </select>
      <input
        type="text"
        name="role"
        placeholder="Rôle"
        value={formData.role}
        onChange={handleChange}
        required
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}
