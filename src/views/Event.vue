<template>
    <div class="container-fluid">
        <div class="row flex-row d-flex justify-content-center">
            <div class=" col-8 col-lg-8 col-md-10  mx-auto mt-5 mb-2 ">
                <div class="card border-0">
                    <div class="d-flex justify-content-center align-items-center">
                        <img :src="eventImgUrl" v-if="event && eventImgUrl" class="card-img-top imgCover imgSize" alt="Image de l'événement" />
                    </div>
                    <div class="card-header">
                        <small>
                            <div class="rounded-pill badge text-bg-primary ms-2">
                                <i class="bi bi-person-plus-fill"></i>
                                <span aria-label='Créé le' v-if="eventData">
                                    <!-- Créé le {{ eventData.createdAt }} -->
                                </span>
                            </div>
                        </small>
                        <small>
                            <!-- <div class="rounded-pill badge text-bg-primary float-end ms-2">
                                <i class="bi bi-person-plus-fill"></i>
                            </div> -->
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
                    <div class="row m-3">
                        <div class="col-2">
                            <router-link :to="{name:'Eventlist'}" class=" btn rounded-pill btn-outline-primary m-1">Retour</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted, defineExpose } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const event = ref(null);
const eventImgUrl = ref(null); // Référence pour stocker l'URL de l'image
const eventData = ref(null); // Référence pour stocker les données complètes

onMounted(async () => {
    try {
        const route = useRoute();
        const eventId = route.params.eventId;
        const response = await axios.get(`http://localhost:1337/api/events/${eventId}?populate=*`);
        if (response.status === 200) {
            event.value = response.data;
            eventData.value = response.data.data.attributes; // Renommer la variable pour éviter le conflit de noms
            console.log(eventData.value);

            // Construction de l'URL de l'image si elle est disponible
            if (eventData.value.eventImg) {
                eventImgUrl.value = `http://localhost:1337${eventData.value.eventImg.data.attributes.url}`;
            }
        } else {
            console.error('Erreur lors de la récupération de l\'événement :', response.statusText);
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'événement :', error.message);
    }
});

defineExpose({ eventData }); // Expose eventData pour qu'il soit accessible dans le modèle
</script>

<style scoped>

.imgSize{
    height: auto;    
    width: 350px;
}

</style>