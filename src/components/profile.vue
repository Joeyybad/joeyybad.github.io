<template>
  <main>
    <h1>profil</h1>
    <div>
      <p>Firstname : {{ profile.firstname }}</p>
      <p>Lastname : {{ profile.lastname }}</p>
      <p>Fullname : {{ fullname }}</p>
    </div>
    <button @click="$event =>rename()">rename</button>
  </main>
</template>
<script setup>

import {computed, reactive, ref } from "vue";

//  ref et reactive ont quasiment la même fonctionnalité, réactive est plus recommandé pour un object plus lourd et traquer en profondeur{deep:true}
const profile = reactive({
  firstname:"Jordan",
  lastname: "Nkunga"
}, );
const rename = () => {
  profile.firstname = "Michael";
  profile.lastname = "Jordan";
};
const fullname = computed(() => `${profile.firstname} ${profile.lastname}`)

// <---------
// export default {
  // name: 'profile',
  // data: () => ({
  //   firstname: " Jordan",
  //   lastname: "Nkunga"
  // }),
  // methods: {
  //   rename() {
  //     this.firstname = "Michael";
  //     this.lastname = "Jordan"
  //   }
  // },
  // computed: {

  //   fullname() {
  //     return `${this.firstname} ${this.lastname}`
  //   }
  // },
// }
</script>