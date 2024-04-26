export const groupCheck = ()=>{
    // Récupération des valeurs des champs du formulaire
    const groupName = document.getElementById('groupName').value.trim();
    const groupDescription = document.getElementById('groupDescription').value.trim();
    const groupCity = document.getElementById('groupCity').value;
    const imgGroup = document.getElementById('imgGroup').value.trim();

    const cityRegex  = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    const urlRegex = /(https?:\/\/.*\.(?:png|jpg))/i


    resetErrors()
    // Vérification du champ groupName
    if (!groupName || groupName.length < 2 || groupName.length > 50) {
        error("Le nom du groupe doit comporter entre 2 et 50 caractères", "groupName");
        return false;
    }

    // Vérification du champ groupDescription
    if (!groupDescription || groupDescription.length < 10 || groupDescription.length > 200) {
        error("La description du groupe doit être compris entre 10 et 200 caractères", "groupDescription");
        return false;
    }

    // Vérification du champ groupCity
    if (!groupCity || !cityRegex.test(groupCity)) {
        error("Le nom de la ville est incorrect", "groupCity");
        return false;
    }

    // Vérification du champ imgUrl
    if (!imgGroup || urlRegex.test(imgGroup)) {
        error("L'Url de l'image est incorrecte", "imgGroup");
        return false;
    }
   
    // Toutes les validations ont réussi, donc on retourne true
    return true;
}

export  const resetErrors = ()=> {
    // Enlève les messages d'erreur précédents 
    const errors = document.querySelectorAll(".error");
    errors.forEach(message => message.remove());
}

export const error = (message, id)=> {
    //définit l'élément error 
    let error = document.createElement("span")
    error.className = "error"
    error.textContent = message

    //définit le champ auquel error est rattaché -- defines on which field error is attached
    document.getElementById(id).parentNode.appendChild(error)
}