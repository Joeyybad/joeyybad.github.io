<template>
    <header>
        <nav class="navbar navbar-expand-lg navStyle sticky-top mb-2 Knewave">
            <div class="container-fluid">
                <router-link :to="{ name: 'Home' }" class="navbar-brand"><img
                        src="../assets/image/LogoBreakFranceAppli-removebg-preview-removebg-preview.webp"
                        alt="logo BreakFrance" />BreakFrance</router-link>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon buttonToggle"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{ name: 'FAQ' }" class="nav-link"
                                @click="deactivateAdminLink">FAQ</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'Home' }" class="nav-link" @click="deactivateAdminLink"><i
                                    class="bi bi-house"></i>Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'Register' }" class="nav-link"
                                @click="deactivateAdminLink">S'inscrire</router-link>
                        </li>

                        <li class='nav-item '>
                            <a class="nav-link text-danger" href=""><i class="bi bi-box-arrow-right text-danger"></i>Se
                                déconnecter</a>
                        </li>

                        <li class="nav-item">
                            <router-link :to="{ name: 'Login' }" class="nav-link" @click="deactivateAdminLink"> <i
                                    class="bi bi-box-arrow-in-left"></i>Se
                                connecter</router-link>
                        </li>


                        <li class="nav-item">
                            <router-link :to="{ name: 'Eventlist' }" class="nav-link "
                                @click="deactivateAdminLink">Evènements</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'Grouplist' }" class="nav-link"
                                @click="deactivateAdminLink">Groupes</router-link>
                        </li>
                        <li class="nav-item dropdown" :class="{ active: isActive }" @click="toggleDropdown">
                            <a class="nav-link dropdown-toggle nav-link" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Administration
                            </a>
                            <ul class="dropdown-menu">
                                <li><router-link :to="{ name:'Eventcreate'}" class="dropdown-item">Créer un
                                        Evènement</router-link></li>
                                <li><router-link :to="{name:'Groupcreate'}" class="dropdown-item ">Créer un groupe de danse</router-link></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <router-link :to="{ name: 'Profil' }" class="dropdown-item">
                                    <li>Profil</li>
                                </router-link>
                            </ul>
                        </li>
                        <li class="nav-item float-end">

                        </li>

                    </ul>
                    <router-link :to="{ name: 'Profil' }"><i
                            class="bi bi-person-circle text-dark fs-2 float-end"></i></router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';

// Declaring a reference to track the dropdown status
const isActive = ref(false);

// Method to toggle the dropdown status
const toggleDropdown = () => {
  isActive.value = !isActive.value; // Toggles the isActive status
};
</script>

<style>
img {
    width: 65px;
    height: auto;
    margin: 2px;
}

.navbar-brand {
    color: #163760;
    text-shadow: 2px 2px 2px white;
}

.navbar-nav .nav-item a.router-link-active:hover {
    color: #0064A3;

}

.navbar-nav .nav-item a.router-link-exact-active {
    color: #16a5c9;
}

.nav-item.dropdown.active .nav-link {
    color: #16a5c9;
}
</style>



