<template>
  <main>
    <div class="container-fluid">
      <div class="row mt-4 m">
        <h1>Mon compte</h1>
      </div>
      <div class="row m-3">
        <div class="col-4 col-sm-10">
          <img src="" alt="" class="">
        </div>
        <div class="col-4">
          <h3> Prénom :</h3>
          <div class="row">
            <h3> Nom :</h3>
          </div>
          <div class="row">
            <h3> Mail : </h3>
          </div>
          <div class="row">
            <h3> Ville : </h3>
          </div>
        </div>
        <div class="col-4 col-sm-2">
          <button class="submit btn btn-outline-primary" @click="toggleModale(true)"><i class="bi bi-pen fs-1"></i></button>
        </div>
      </div>
      <modaleUser v-bind:revele="revele" @update:revele="revele = $event"></modaleUser>
    </div>
  </main>
</template>

<script setup>
import ModaleUser from '@/components/ModaleUser.vue';
import { ref } from 'vue';

// Déclaration de la variable réactive
const revele = ref(false);

// Déclaration du composant enfant
const components = { 'modaleUser': ModaleUser };

// Méthode pour basculer l'état de la modale
const toggleModale = () => {
  revele.value = !revele.value; // Inverser la valeur actuelle
};
</script>


<style>
main {
    height: 80vh;

}

.submit {
    color: #0064A3;
    border: none;
    background-color: white;
}

/* .submit:hover {
  background-color: rgb(56, 90, 194);
  cursor: pointer;
} */
</style>