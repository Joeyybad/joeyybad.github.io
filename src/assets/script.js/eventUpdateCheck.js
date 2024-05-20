import moment from 'moment';
export const eventUpdateCheck = (updatedEvent) => {
    const { eventName, eventDescription, eventDate, eventHour, registeredUsers, city } = updatedEvent;

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const cityRegex = /^.{3,}$/;

    // Vérification du champ eventName
    if (!eventName || eventName.length < 2 || eventName.length > 20) {
        error("Le nom de l'événement doit comporter entre 2 et 20 caractères", "eventName");
        return false;
    }

    // Vérification du champ eventDescription
    if (!eventDescription || eventDescription.length < 10 || eventDescription.length > 200) {
        error("La description de l'événement doit être comprise entre 10 et 200 caractères", "eventDescription");
        return false;
    }

    // Vérification du champ eventDate
    if (!eventDate || !dateRegex.test(eventDate)) {
        error("La date doit être valide", "eventDate");
        return false;
    }

    // Vérification du champ eventHour
    if (!moment(eventHour, 'HH:mm').isValid()) {
        error("L'heure doit être au format 24 heures", "eventHour");
        return false;
    }

      // Vérification du champ city
    //   if (!city || !cityRegex.test(city)) {
    //     error("L'adresse doit contenir au moins 3 caractères", "city");
    //     return false;
    // }

    // Vérification du champ registeredUsers
    if (isNaN(registeredUsers) || registeredUsers < 1 || registeredUsers > 60) {
        error("Le nombre de participants doit être compris entre 1 et 60", "registeredUsers");
        return false;
    }

    // Toutes les validations ont réussi, donc on retourne true
    return true;
};

export const resetErrors = () => {
    // Enlève les messages d'erreur précédents
    const errors = document.querySelectorAll(".error");
    errors.forEach(message => message.remove());
};

export const error = (message, id) => {
    // définit l'élément error
    let error = document.createElement("span");
    error.className = "error";
    error.textContent = message;

    // définit le champ auquel error est rattaché
    document.getElementById(id).parentNode.appendChild(error);
};