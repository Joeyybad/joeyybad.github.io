<template>
    <div class="bloc-modale" v-if="revele">
        <div class="overlay" @click="toggleModale(false)" tabindex="-1"></div>
        <div class="modale card" tabindex="0">
            <button class="btn-modale btn btn-danger" @click="toggleModale(false)"
                aria-label="Fermer la fenêtre modale">X</button>
            <h2> Modifier mon compte</h2>
            <div class="flex">
                <main class="container" aria-labelledby="form-title">
                    <form class="form">
                        <div class="flex">
                            <label for="firstname" class="form-label">
                                <span>Prénom</span>
                                <input class="input form-control" id="firstname" name="firstname" type="text"
                                    placeholder="Entrez votre prénom" aria-label="Prénom" value="">
                            </label>

                            <label for="lastname" class="form-label">
                                <span>Nom</span>
                                <input class="input form-control" id="lastname" name="lastname" type="text"
                                    placeholder=" Entrez votre nom" aria-label="Nom" value="">
                            </label>
                        </div>

                        <label for="email" class="form-label">
                            <span>Email</span>
                            <input class="input form-control" id="email" name="email" type="email" placeholder="Entrez votre email"
                                aria-label="Email" value="">
                        </label>

                        <label for="postal-code" class="form-label">
                            <span>Code Postal</span>
                            <input class="input form-control" type="text" id="postal-code" name="postal-code" aria-label="Code Postal"
                                required value="">
                        </label>

                        <br><label for="city" class="form-label">Ville :</label>
                        <select name="city" class="form-control" id="city" aria-label="input Selection de la ville" required value="">
                            <option value="">--Choisissez une ville--</option>
                            <option value=""></option>
                        </select>

                        <label for="password" class="form-label">
                            <span>Mot de passe</span>
                            <input class="input form-control" id="password" name="password" type="password"
                                placeholder=" Entrez votre mot de passe" aria-label="Mot de passe" value="">
                        </label>
                        <label for="confPassword" class="form-label">
                            <span>Confirm password</span>
                            <input class="input form-control" id="confPassword" name="confPassword" type="password"
                                placeholder=" Confirmez votre mot de passe" aria-label="Confirmez votre mot de passe">
                        </label>
                        <br><button class="submit mt-2" v-on:click="registerCheck">Valider</button>
                    </form>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, onMounted, nextTick } from 'vue';
import { updateCityList, initializeEventHandlers } from '@/assets/script.js/CityFetch';
import { registerCheck } from '@/assets/script.js/RegisterCheck';

const props = defineProps({
    revele: Boolean
});

const emit = defineEmits(['update:revele']);

const toggleModale = () => {
    emit('update:revele', false); 
    
};

onMounted(() => {
    if (props.revele) {
        nextTick(() => {
            document.querySelector('.modale').focus();
            
        });
    }
});
</script>

<style scoped>
.bloc-modale {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.modale {
    background: #f1f1f1;
    color: #333;
    width: 650px;
    height: 550px;
    padding: 50px;
    position: fixed;
    top: 10%;
}

.btn-modale {
    position: absolute;
    top: 10px;
    right: 10px;
}

@media screen and (max-width: 812px) {
    .modale {
        background: #f1f1f1;
        color: #333;
        width: 350px;
        height: 500px;
        padding: 50px;
        position: fixed;
        top: 25%;
    }

}

.form {
    width: 600px;
    height: 300px;

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

.flex {
    display: flex;
    width: 100%;
    gap: 6px;
}



.form label .input {
    width: 80%;
    padding: 10px 10px 10px 10px;
    outline: 0;
    border: 1.5px solid #0064A3;
    border-radius: 10px;
    margin: 6px;
}

.form label .input+span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 12px;
    cursor: text;
    transition: 0.3s ease;
}

.select {
    border: 1.5px solid #0064A3;
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
</style>