<template>
    <main class="container" aria-labelledby="form-title">
    <form class="form">
        <div class="d-flex justify-content-center align-items-center">
            <p id="form-title" class="title">Connexion</p>
        </div>
        <p class="message">Connecte-toi ! <i
                class="bi bi-emoji-grin text-warning fs-5"></i></p>

        <label for="email">
            <span>Email</span>
            <input class="input" id="email" name="email" type="email" placeholder="" aria-label="Email">
        </label>

        <label for="password">
            <span>Mot de passe</span>
            <input class="input" id="password" name="password" type="password" placeholder="" aria-label="Mot de passe">
        </label>

        <button type="button" class="submit mt-2" v-on:click="loginCheck">Valider</button>
        <p class="signin">Pas encore inscrit ? <router-link :to="{name:'Register'}">Incris-toi!</router-link></p>
    </form>
</main>
</template>

<script setup>
import {loginCheck} from '@/assets/script.js/LoginCheck'

</script>

  
<style scoped>

/**********  CSS Login Form  **********/
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* Optionnel : centrer verticalement le formulaire sur la hauteur de la fenêtre */
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40%;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    -webkit-box-shadow: 9px 9px 18px -1px rgba(46, 46, 46, 0.9);
    box-shadow: 9px 9px 18px -1px rgba(46, 46, 46, 0.9);
}

.title {
    font-size: 28px;
    color: #0064A3;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
}

.message,
.signin {
    color: #163760;
    font-size: 16px;
    font-style: italic;
}

.signin {
    text-align: center;
}

.signin a {
    color: #0064A3;
}

.signin a:hover {
    text-decoration: underline #0064A3;
}

.flex {
    display: flex;
    width: 100%;
    gap: 6px;
}

.form label {
    position: relative;
}

.form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1.5px solid #0064A3;
    border-radius: 10px;
}

.form label .input+span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease; 
} 

.form label .input:placeholder-shown+span {
    top: 15px;
    font-size: 0.9em;
}

.form label .input:focus+span,
.form label .input:valid+span {
    top: -1px;
    font-size: 0.7em;
    font-weight: 600;
} 
.form label .input:valid+span {
    color: rgb(0, 0, 0);
}

.submit {
    border: none;
    outline: none;
    background-color: #0064A3;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
}

.submit:hover {
    background-color: rgb(56, 90, 194);
    cursor: pointer;
}

/**********  CSS Login Form  **********/

/* Responsive Login Form Mobile*/

@media screen and (max-width: 812px) {
    .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    /* Optionnel : centrer verticalement le formulaire sur la hauteur de la fenêtre */
}
  .form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    -webkit-box-shadow: 9px 9px 18px -1px rgba(46, 46, 46, 0.9);
    box-shadow: 9px 9px 18px -1px rgba(46, 46, 46, 0.9);
  }

}



</style>