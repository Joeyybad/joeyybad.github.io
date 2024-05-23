<template>
    <div class="bloc-modale" v-if="revele">
        <div class="overlay" @click="toggleModale(false)" tabindex="-1"></div>
        <div class="modale card" tabindex="0">
            <button class="btn-modale btn btn-danger" @click="toggleModale(false)"
                aria-label="Fermer la fenêtre modale">X</button>
            <h2> Modifier l'Evènement</h2>
            <div class="flex">
                <main class="container" aria-labelledby="form-title">
                    <form id="submit_event_form" class="form" @submit.prevent="submitChanges">
                        <div class="flex">
                            <label for="eventImg" class="form-label">
                                <div v-if="!props.selectedEvent.attributes.eventImg.data">
                                    <span>Image de l'event - Selection</span>
                                    <input type="file" id="eventImg" name="eventImg" accept="image/*" @change="handleImageChange($event)">
                                </div>
                                <div v-else>
                                    <span>Image de l'event</span>
                                    <img :src="props.selectedEvent.attributes.eventImg.data.attributes.url" :alt=props.selectedEvent.attributes.eventImg.data.attributes.name />
                                    <button @click="removeImage">Supprimer l'image</button>
                                </div>
                                <!-- <input type="file" id="eventImg" name="eventImg" accept="image/*" @change="handleImageChange"> -->
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
import { eventUpdateCheck, resetErrors } from '@/assets/script/eventUpdateCheck';

const props = defineProps({
    revele: Boolean,
    selectedEvent: Object
});

const emit = defineEmits(['update:revele', 'eventUpdated']); // definition des events et affectation à la constante emit 

const toggleModale = (revele) => {
    emit('update:revele', revele);
};

const handleImageChange = (event) => {
    let token = 'af440c0951718041a8928a8d8a9a39d5311092108401ee881c1fbcdcc71c547dec4dfca36d0b1439d1fb9bb2fe6d3b212c83d565f92caf0941c0aaf5998d3afab7deabdf66ff69ae1dc7447e522149652fb1303df08aa50b7363417287b6054f831db8d9e3213bd12e3b5c6fdf7247e31268d87c7f53fb9fc4962a5291dd7e9a';
    const file = event.target.files[0];
    const fd = new FormData();
    fd.append('files', file);
    axios.post('https://lovable-angel-609be25e3f.strapiapp.com/api/upload', fd, {
          headers: { 
            'Authorization': 'Bearer '+ token,
            'Content-Type' : 'multipart/form-data',
           },
        })
        .then(response => {
          console.log(response);
          if (response.status==200){
            document.getElementById('eventImg').style.color = 'green';
            props.selectedEvent.attributes.eventImg = response.data
            console.log('Données props :', props);
          } else {
            document.getElementById('eventImg').style.color = 'unset';
          }
        });
};

 const removeImage = (e) => {
        props.selectedEvent.attributes.eventImg = '';
    }

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
            eventImg: props.selectedEvent.attributes.eventImg,
            eventDescription: props.selectedEvent.attributes.eventDescription,
            eventDate: props.selectedEvent.attributes.eventDate,
            eventHour: eventHourFormatted, // Heure formattée via moment
            location: props.selectedEvent.attributes.location,
            registeredUsers: props.selectedEvent.attributes.registeredUsers,
        };

        // Vérifie les données avant de soumettre
        if (!eventUpdateCheck(updatedEvent)) {
            return;
        }
        console.log('Données envoyées dans la requête PUT !! :', updatedEvent)
        console.log('Données props :', props)

        const response = await axios.put(`https://lovable-angel-609be25e3f.strapiapp.com/api/events/${props.selectedEvent.id}?populate=*`, {
            data: updatedEvent
        });

        if (response.status === 200) {
            console.log(response.data);
            console.log(props);
            toggleModale(false); // permet de fermer la modale
        } else {
            console.error('Erreur lors de la mise à jour de l\'événement :', response.statusText);
        }
    } catch (error) {
        console.log('name : '+ props.selectedEvent.attributes.eventName);
        console.log('photo : '+ props.selectedEvent.attributes.eventImg.data);
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