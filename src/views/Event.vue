<template>
    <div class="container-fluid">
        <div class="row flex-row d-flex justify-content-center">
            <div class=" col-8 col-lg-8 col-md-10  mx-auto mt-5 mb-2 ">
                <div class="card border-0">
                    <div class="d-flex justify-content-center align-items-center">
                        <img v-if="eventImgUrl" :src="eventImgUrl" class="card-img-top imgSize"
                            alt="Image de l'événement" />
                    </div>
                    <div class="card-header">
                        <small>
                            <div class="rounded-pill badge text-bg-primary ms-2">
                                <i class="bi bi-person-plus-fill"></i>
                                <span aria-label='Créé le' v-if="eventData">
                                    Créé le {{ new Date(eventData.createdAt).toLocaleString() }}
                                </span>
                            </div>
                        </small>
                        <small>
                            <!-- <div class="rounded-pill badge text-bg-primary float-end ms-2">
                                <i class="bi bi-person-plus-fill"></i>
                            </div> -->
                        </small>
                    </div>
                    <template v-if="eventData">
                        <h5 class="card-title mt-1 fw-semibold fs-2 text-center mb-4"> {{ eventData.eventName }}</h5>
                        <p class="card-text fw-medium">{{ eventData.eventDescription }}</p><br><br>
                        <p class="card-text fw-semibold"><em>le {{ eventData.eventDate }} à {{ eventData.eventHour }} à {{
                            eventData.location }}</em></p>
                        <p>Places disponibles : / {{ eventData.registeredUsers }}</p>
                    </template>
                    <template v-else>
                        <p class="card-text">L'évenement n'a pas pu charger</p>
                    </template>
                    <div class="card-body">
                    </div>
                    <div class="d-flex justify-content-center m-2">
                        <form action="" method="post">
                            <button type="button" class="btn rounded-pill btn-outline-success"
                                aria-label="S'inscrire">S'inscrire
                            </button>
                        </form>
                    </div>
                    <div class="card-body">
                    </div>
                    <!-- v-if="isAdmin" -->
                  
                    <div class="row m-3">
                        <div class="col-2">
                            <router-link :to="{ name: 'Eventlist' }"
                                class=" btn rounded-pill btn-outline-primary m-1">Retour</router-link>
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
import defaultEventImage from '@/assets/image/eventNotFound.png';

const event = ref(null);
const eventImgUrl = ref(null);
const eventData = ref(null);


onMounted(async () => {
    try {
        const route = useRoute();
        const eventId = route.params.eventId;
        const response = await axios.get(`https://lovable-angel-609be25e3f.strapiapp.com/api/events/${eventId}?populate=*`);
        if (response.status === 200) {
            event.value = response.data;
            eventData.value = response.data.data.attributes;

            if (eventData.value.eventImg && eventData.value.eventImg.data) {
                eventImgUrl.value = eventData.value.eventImg.data.attributes.url;
            } else {
                eventImgUrl.value = defaultEventImage; 
            }
        } else {
            eventImgUrl.value = defaultEventImage;
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'événement :', error.message);
        eventImgUrl.value = defaultEventImage;
    }
});

defineExpose({ eventData, eventImgUrl });
</script>

<style scoped>
.imgSize {
    width: 400px;
    height: auto;
}
</style>