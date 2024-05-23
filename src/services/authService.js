import axios from 'axios';

// Fonction pour enregistrer un nouvel utilisateur
export const registerUser = async (userData) => {
  try {
    // Effectuez une requête POST vers l'endpoint d'inscription de votre API Strapi
    console.log(userData);
    const response = await axios.post('https://lovable-angel-609be25e3f.strapiapp.com/auth/local/register', userData);
    // Gérez la réponse de Strapi (par exemple, affichez un message de succès ou d'erreur)
    console.log(response.data); // Affiche la réponse de l'API Strapi (par exemple, le token JWT)
    return response.data; // Vous pouvez également renvoyer des données supplémentaires si nécessaire
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error.response.data);
    throw new Error('Erreur lors de l\'inscription'); // Gérez l'erreur comme vous le souhaitez
  }
};