<template>
    <div class="bloc-modale" v-if="revele">
        <div class="overlay" @click="toggleModale(false)" tabindex="-1"></div>
        <div class="modale card" tabindex="0">
            <button class="btn-modale btn btn-danger" @click="toggleModale(false)"
                aria-label="Fermer la fenêtre modale">X</button>
            <h2> Modifier l'Evènement</h2>
            <div class="flex">
                <main class="container" aria-labelledby="form-title">
                    <form class="form" @submit.prevent="submitChanges">
                        <div class="flex">
                            <label for="eventImg" class="form-label">
                                <span>Image de l'event</span>
                                <input type="file" id="eventImg" name="eventImg" accept="image/*" @change="handleImageChange">
                            </label>
                            <label for="eventName" class="form-label">
                                <span>Nom de l'évent</span>
                                <input class="input form-control" id="eventName" name="eventName" type="text" placeholder=""
                                    aria-label="nom de l'event" v-model="props.selectedEvent.attributes.eventName" />
                            </label>
                        </div>
                        <label for="eventDescription" class="form-label">
                            <span>Description</span>
                            <textarea class="input form-control" id="eventDescription" name="eventDescription" type="text"
                                placeholder="" aria-label="description de l'event"
                                v-model="props.selectedEvent.attributes.eventDescription"></textarea>
                        </label>
                        <label for="eventDate" class="form-label">
                            <span>Date</span>
                            <input class="input form-control" id="eventDate" name="eventDate" type="date" aria-label="date"
                                v-model="props.selectedEvent.attributes.eventDate" />
                        </label>
                        <label for="eventHour" class="form-label">
                            <span>Heure</span>
                            <input class="input form-control" id="eventHour" name="eventHour" type="time" aria-label="heure"
                                v-model="formattedEventHour" />
                        </label>
                        <label for="city" class="form-label">
                            <span>Ville</span>
                            <input class="input form-control" id="city" name="city" type="text"
                                aria-label="ville de l'evenement" v-model="props.selectedEvent.attributes.location" />
                        </label>
                        <label for="registeredUsers" class="form-label">
                            <span>Participants</span>
                            <input class="input form-control" id="registeredUsers" name="registeredUsers" type="number"
                                aria-label="Participants" v-model="props.selectedEvent.attributes.registeredUsers" />
                        </label>
                        <br><button class="submit mt-2" type="submit">Valider</button>
                    </form>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, onMounted, ref, computed, nextTick } from 'vue';
import axios from 'axios';
import moment from 'moment';
import { eventUpdateCheck, resetErrors } from '@/assets/script.js/eventUpdateCheck';

const props = defineProps({
    revele: Boolean,
    selectedEvent: Object
});

const emit = defineEmits(['update:revele', 'eventUpdated']);

const toggleModale = (revele) => {
    emit('update:revele', revele);
};

const handleImageChange = (event) => {
    const file = event.target.files[0];
    // Gérer le fichier image si nécessaire
};

const formattedEventHour = computed({
    get() {
        if (props.selectedEvent.attributes.eventHour) {
            const [hours, minutes] = props.selectedEvent.attributes.eventHour.split(':');
            return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
        }
        return '';
    },
    set(value) {
        props.selectedEvent.attributes.eventHour = value;
    }
});

const submitChanges = async () => {
    try {
        // Efface les erreurs précédentes
        resetErrors();
        
        const eventHourFormatted = moment(props.selectedEvent.attributes.eventHour, 'HH:mm').format('HH:mm:ss.SSS');

        const updatedEvent = {
            eventName: props.selectedEvent.attributes.eventName,
            eventDescription: props.selectedEvent.attributes.eventDescription,
            eventDate: props.selectedEvent.attributes.eventDate,
            eventHour: eventHourFormatted, // Utiliser la nouvelle valeur formatée
            location: props.selectedEvent.attributes.location,
            registeredUsers: props.selectedEvent.attributes.registeredUsers,
        };

        // Vérifie les données avant de soumettre
        if (!eventUpdateCheck(updatedEvent)) {
            return;
        }
        console.log('Données envoyées dans la requête PUT !! :', updatedEvent)

        const response = await axios
        .put(`https://lovable-angel-609be25e3f.strapiapp.com/api/events/${props.selectedEvent.id}`, {
            data: updatedEvent
        })
        .catch((error) => console.log(error));
        if (response.status === 200) {
            // console.log('done', response);
        } else {
            // console.log('not done', response);
        }


    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'événement :', error.message);
    }
};

onMounted(() => {
    if (props.revele) {
        nextTick(() => {
            document.querySelector('.modale').focus();
        });

        if (props.selectedEvent.attributes.eventHour) {
            const eventHour = new Date(`1970-01-01T${props.selectedEvent.attributes.eventHour}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            props.selectedEvent.attributes.eventHour = eventHour;
        }
    }
});
</script>

<style scoped>
.bloc-modale {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.modale {
    background: #f1f1f1;
    color: #333;
    width: 750px;
    height: 600px;
    padding: 50px;
    position: fixed;
    top: 10%;
}

.btn-modale {
    position: absolute;
    top: 10px;
    right: 10px;
}

@media screen and (max-width: 812px) {
    .modale {
        background: #f1f1f1;
        color: #333;
        width: 350px;
        height: 500px;
        padding: 50px;
        position: fixed;
        top: 25%;
    }

}

.form {
    width: 600px;
    height: 300px;

}

.title {
    font-size: 28px;
    color: #0064A3;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
}

.flex {
    display: flex;
    width: 100%;
    gap: 6px;
}



.form label .input {
    width: 80%;
    padding: 10px 10px 10px 10px;
    outline: 0;
    border: 1.5px solid #0064A3;
    border-radius: 10px;
    margin: 6px;
}

.form label .input+span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 12px;
    cursor: text;
    transition: 0.3s ease;
}

.select {
    border: 1.5px solid #0064A3;
}

.form label .input:placeholder-shown+span {
    top: 15px;
    font-size: 0.9em;
}

.form label .input:focus+span,
.form label .input:valid+span {
    top: -1px;
    font-size: 0.7em;
    font-weight: 600;
}

.form label .input:valid+span {
    color: rgb(0, 0, 0);
}

.submit {
    border: none;
    outline: none;
    background-color: #0064A3;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
}

.submit:hover {
    background-color: rgb(56, 90, 194);
    cursor: pointer;
}
</style>