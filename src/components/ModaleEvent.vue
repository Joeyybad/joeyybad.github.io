<template>
    <div class="bloc-modale" v-if="revele">
        <div class="overlay" @click="toggleModale(false)" tabindex="-1"></div>
        <div class="modale card" tabindex="0">
            <button class="btn-modale btn btn-danger" @click="toggleModale(false)"
                aria-label="Fermer la fenêtre modale">X</button>
            <h2> Modifier l'Evènement</h2>
            <div class="flex">
                <main class="container" aria-labelledby="form-title">
                    <form class="form">
                        <div class="flex">
                            <label for="eventImg" class="form-label">
                                <span>Image de l'event</span>
                                <input type="file" name="eventImg" accept="image/*" @change="handleImageChange">
                            </label>
                            <label for="eventName" class="form-label">
                                <span>Nom de l'évent</span>
                                <input class="input form-control" id="eventName" name="eventName" type="text" placeholder=""
                                    aria-label="nom de l'event" v-model="props.selectedEvent.attributes.eventName" />
                            </label>
                        </div>
                        <label for="description" class="form-label">
                            <span>Description</span>
                            <textarea class="input form-control" id="eventDescription" name="eventDescription" type="text"
                                placeholder="" aria-label="description de l'event"
                                v-model="props.selectedEvent.attributes.eventDescription"></textarea>
                        </label>

                        <label for="date" class="form-label">
                            <span>Date</span>
                            <input class="input form-control" id="eventDate" name="eventDate" type="date" aria-label="date"
                                v-model="props.selectedEvent.attributes.eventDate" />

                        </label>
                        <label for="time" class="form-label">
                            <span>Heure</span>
                            <input class="input form-control" id="eventHour" name="eventHour" type="time" aria-label="heure"
                                v-model="props.selectedEvent.attributes.eventHour" />
                        </label>
                        <label for="location" class="form-label">
                            <span>Ville</span>
                            <input class="input form-control" id="location" name="location" type="text"
                                aria-label="ville de l'evenement" v-model="props.selectedEvent.attributes.location" />
                        </label>
                        <label for="playerNumber" class="form-label">
                            <span>Participants</span>
                            <input class="input form-control" id="playerNumber" name="playerNumber" type="number"
                                aria-label="Participants" v-model="props.selectedEvent.attributes.registeredUsers" />
                        </label>
                        <br><button class="submit mt-2" v-on:click="eventCheck">Valider</button>
                    </form>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, onMounted, nextTick } from 'vue';

const props = defineProps({
    revele: Boolean,
    selectedEvent: Object
});

const emit = defineEmits(['update:revele']);

const toggleModale = (revele) => {
    emit('update:revele', revele);
};
const handleImageChange = (event) => {
    const file = event.target.files[0];
    
};

onMounted(() => {
    if (props.revele) {
        nextTick(() => {
            document.querySelector('.modale').focus();
        });
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