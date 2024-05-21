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
                <div class="col-sm-10 col-md-6 col-lg-4" v-for="event in events" :key="event.id" :event="event" @editEvent="editEvent">
                    <div class="card text-center border-primary mt-3 mb-3">
                        <div class="card-header"> <img :src="event.eventImgUrl" class="card-img-top imgCover imgSize" alt="EventImg" />
                        </div>
                        <div class="card-body border-success">
                            <h5 class="card-title">{{ event.eventName }}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary"><i class="bi bi-calendar-date"></i> le {{
                                event.eventDate }} à {{ formatHour(event.eventHour) }}</h6> 
                            <p class="card-text text-truncate">{{ event.eventDescription }}</p>
                            <p class="card-text">{{ event.location }}</p>
                            <router-link :to="{ name: 'Event', params: { eventId: event.id } }"
                                class="card-link btn rounded-pill btn-outline-primary m-1">
                                Voir l'évènement
                            </router-link>
                            <button class="btn rounded-pill btn-warning m-1" @click="openModal(event.id)">Modifier
                                l'event</button>
                            <button type="button" class="btn rounded-pill btn-danger m-1" data-bs-toggle="modal"
                                data-bs-target="">Supprimer l'évènement</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <ModaleEvent :revele="revele" :selectedEvent="selectedEvent" @update:revele="revele = $event"  @eventUpdated="handleEventUpdated" />
    </main>
</template>
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import moment from 'moment';
import ModaleEvent from '@/components/ModaleEvent.vue';


// // Déclaration de la variable réactive
const revele = ref(false);
const events = ref([]);
const selectedEvent = ref(null); // Import de selectedEvent de 'ModaleEvent.vue'

// Fonction pour récupérer les événements depuis l'API Strapi
const fetchEvents = async () => {
    try {
        const response = await axios.get('https://lovable-angel-609be25e3f.strapiapp.com/api/events?populate=*');
        if (response.status === 200) {
            const eventData = response.data.data;
            events.value = eventData.map(event => ({
                id: event.id,
                eventName: event.attributes.eventName,
                eventDate: event.attributes.eventDate,
                eventHour: event.attributes.eventHour,
                eventDescription: event.attributes.eventDescription,
                location: event.attributes.location,
                eventImgUrl: event.attributes.eventImg.data ? event.attributes.eventImg.data.attributes.url : "src/assets/image/eventNotFound.png"
            }));
            // console.log('data: ');
            // console.table(events.value);
        }
    } catch (error) {
        console.error(error);
    }
};

// Fonction pour ouvrir la modale avec les détails de l'événement sélectionné
const openModal = async (eventId) => {
    try {
        const response = await axios.get(`https://lovable-angel-609be25e3f.strapiapp.com/api/events/${eventId}?select=eventName,eventDate,eventHour,eventDescription,location,eventImg`);
        if (response.status === 200) {
            selectedEvent.value = response.data.data;
            toggleModale(true);
        }
    } catch (error) {
        console.error(error);
    }
};
const editEvent = (event) => {
  selectedEvent.value = event;
  showModal.value = true;
};
// Fonction pour mettre à jour les évènements

const handleEventUpdated = (updatedEvent) => {
  // Trouvez l'index de l'événement mis à jour
  const index = events.value.findIndex(event => event.id === updatedEvent.data.id);
  if (index !== -1) {
    // Mettez à jour l'événement dans la liste locale
    events.value[index] = updatedEvent.data;
  }
  // Fermez la modale
  showModal.value = false;
};

// Fonction pour fermer ou ouvrir la modale
const toggleModale = (isRevealed) => {
    revele.value = isRevealed;
};

// Fonction pour formater l'heure
const formatHour = (hour) => {
  return moment(hour, 'HH:mm:ss').format('HH:mm');
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

/*** Img dimension ***/
.imgSize{
    height: 250px;    
    width: auto;
}
</style>

