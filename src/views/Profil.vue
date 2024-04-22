<template>
    <main>
        <div class="container-fluid">
            <div class="row mt-4">
                <h1>Mon compte</h1>
            </div>
            <div class="row">
                <div class="col-2">
                    <img src="" alt="" class="col-12">
                </div>
                <div class="col-2">
                    <h3> Prénom :
                    </h3>
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
                <div class="col-4">
                    <button class="submit btn btn-outline-primary" v-on:click="toggleModale(true)"><i class="bi bi-pen fs-1"></i></button>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <modale v-bind:revele="revele" v-on:update:revele="revele = $event"></modale>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Modale from '@/components/Modale.vue';
export default {
    name: 'Profil',
    data() {
        return {
            revele: false
        }
    },
    components: { 'modale': Modale },
    methods: {
        toggleModale(revele) {
            this.revele = revele;
        }
    }
}
</script>


<style>
main{
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