<template>
    <main>
        <div class="container-fluid">
            <div class="row">
                <h1 class="text-center">Evènements</h1>
            </div>
            <div class="row">
                <div class="col-12 d-flex justify-content-center mt-3">
                    <div class="search mb-5">
                        <input placeholder="Recherche" type="text">
                        <button type="submit"><i class="bi bi-search m-2"></i>go</button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-10 col-md-6 col-lg-4" v-for="event in events" :key="event.id">
                    <div class="card border-primary mt-3 mb-3">
                        <!-- <img :src="" class="card-img-top imgCover" alt="EventImg" /> -->
                        <div class="card-header"></div>
                        <div class="card-body border-success">
                            <h5 class="card-title">{{ event.eventName }}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary"><i class="bi bi-calendar-date"></i> le {{
                                event.eventDate }} à {{ event.eventHour }}</h6>
                            <p class="card-text text-truncate">{{ event.eventDescription }}</p>
                            <p class="card-text">{{ event.location }}</p>
                            <router-link :to="{ name: 'Event' }"
                                class="card-link btn rounded-pill btn-outline-primary m-1">Voir l'évènement</router-link>
                            <button class="btn rounded-pill btn-warning m-1" @click="openModal(event.id)">Modifier
                                l'event</button>
                            <button type="button" class="btn rounded-pill btn-danger m-1" data-bs-toggle="modal"
                                data-bs-target="">Supprimer l'évènement</button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <ModaleEvent :revele="revele" :selectedEvent="selectedEvent" @update:revele="revele = $event" />
    </main>
</template>
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import ModaleEvent from '@/components/ModaleEvent.vue';

// Déclaration de la variable réactive
const revele = ref(false);
const events = ref([]);
const selectedEvent = ref(null); // Importez selectedEvent depuis 'ModaleEvent.vue'

// Fonction pour récupérer les événements depuis l'API Strapi
const fetchEvents = async () => {
    try {
        const response = await axios.get('http://localhost:1337/api/events');
        if (response.status === 200) {
            const eventData = response.data.data;
            events.value = eventData.map(event => ({
                id: event.id,
                eventName: event.attributes.eventName,
                eventDate: event.attributes.eventDate,
                eventHour: event.attributes.eventHour,
                eventDescription: event.attributes.eventDescription,
                location: event.attributes.location
            }));
        }
    } catch (error) {
        console.error(error);
    }
};

// Fonction pour ouvrir la modale avec les détails de l'événement sélectionné
const openModal = async (eventId) => {
    try {
        const response = await axios.get(`http://localhost:1337/api/events/${eventId}`);
        if (response.status === 200) {
            selectedEvent.value = response.data.data; 
            console.log(selectedEvent.value)// Assurez-vous que selectedEvent est bien importé de 'ModaleEvent.vue'
            toggleModale(true);
        }
    } catch (error) {
        console.error(error);
    }
};

// Fonction pour fermer ou ouvrir la modale
const toggleModale = (isRevealed) => {
    revele.value = isRevealed;
};

// Fonction pour modifier les informations d'un événement
const editEvent = (eventId, updatedEventData) => {
    axios.patch(`http://localhost:1337/api/events/${eventId}`, updatedEventData)
        .then(response => {
            console.log('Événement modifié avec succès :', response.data);
            // Actualiser la liste des événements après modification
            fetchEvents();
        })
        .catch(error => {
            console.error('Erreur lors de la modification de l\'événement :', error);
        });
};

// Appel de la fonction fetchEvents pour charger les événements au montage du composant
fetchEvents();
</script>
<style scoped>
/**************** CSS Research input ******************/

.search {
    display: inline-block;
    position: relative;
    margin-left: 6px;
}

.search input[type="text"] {
    width: 400px;
    padding: 9px;
    border: none;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.search button[type="submit"] {
    background-color: #4e99e9;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 12px 20px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: -3px;
    right: 0;
    transition: .9s ease;
}

.search button[type="submit"]:hover {
    transform: scale(1.1);
    color: rgb(255, 255, 255);
    background-color: blue;
}

/**************** End CSS Research input *****************/
</style>

