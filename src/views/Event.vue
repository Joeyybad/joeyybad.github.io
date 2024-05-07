<template>
    <main>
        <div class="container-fluid">
            <div class="row flex-row d-flex justify-content-center">
                <div class=" col-8 col-lg-8 col-md-10  mx-auto mt-5 mb-2">
                    <div class="card border-0">
                        <img class="card-img-top imgCover" alt="Image de l'événement" />
                        <div class="card-header">
                            <small>
                                <div class="rounded-pill badge text-bg-primary ms-2">
                                    <i class="bi bi-person-plus-fill"></i>
                                    <span aria-label='Créé le'>
                                        Créé le 
                                    </span>
                                </div>
                            </small>
                            <small>
                                <div class="rounded-pill badge text-bg-primary float-end ms-2">
                                    <i class="bi bi-person-plus-fill"></i>
                                </div>
                            </small>
                        </div>
                        <div class="card-body">
                            <!-- <h5 class="card-title mt-1 fw-semibold fs-2 text-center mb-4"> {{ eventData.eventName }}</h5> -->
                            <!-- <p class="card-text fw-medium">{{ eventData.eventDescription }}</p><br><br> -->
                            <!-- <p class="card-text fw-semibold"><em>le {{ eventData.eventDate }} à {{ eventData.eventHour }} à {{ eventData.location }}</em></p> -->
                        </div>
                        <div class="d-flex justify-content-center m-2">
                            <form action="" method="post">
                                <button type="button" class="btn rounded-pill btn-outline-success" aria-label="S'inscrire">S'inscrire
                                </button>
                            </form>
                        </div>
                        <div class="card-body">
                        </div>
                        <!-- v-if="isAdmin" -->
                        <div class="row">
                            <div class="col d-flex align-items-center justify-content-center">
                                <a href="" type="button" class="btn btn-outline-warning m-2 " data-bs-toggle="modal"
                                    data-bs-target="#ModalEventModif{{event.id}}"> Modifier
                                    l'événement</a>
                                <button type="button" class="btn btn-outline-danger m-2" data-bs-toggle="modal"
                                    data-bs-target="#ModalEventSupp{{event.id}}"> Supprimer l'événement</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <router-link :to="{name:'Eventlist'}" class=" btn rounded-pill btn-outline-primary m-1">Retour</router-link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const event = ref(null);
const eventData = ref(null); // Variable locale pour stocker les données de l'événement

onMounted(async () => {
    try {
        const route = useRoute();
        const eventId = route.params.eventId;
        const response = await axios.get(`http://localhost:1337/api/events/${eventId}?populate=*`);
        if (response.status === 200) {
            event.value = response.data;
            eventData.value = response.data.data.attributes; // Extraction des données de l'événement pour les manipuler plus facilement
            console.log(eventData.value)
        } else {
            console.error('Erreur lors de la récupération de l\'événement :', response.statusText);
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'événement :', error.message);
    }
});
</script>