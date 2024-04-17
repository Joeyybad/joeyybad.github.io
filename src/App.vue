
<template>
  <main>

    <RouterView/>
    <h1 class=""> API STYLE</h1>
    <profile />
    <ul>
      <li>
        <RouterLink :to="{ name: 'Home' }"> Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'FAQ' }"> Faq </RouterLink>
      </li>
    </ul>
  </main>
</template>

<script setup>
import profile from './components/profile.vue';


</script>
