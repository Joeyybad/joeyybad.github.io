<template>
    <main>
        <div class="container-fluid">
            <div class="row flex-row d-flex justify-content-center">
                <div class=" col-8 col-lg-8 col-md-10  mx-auto mt-5 mb-2">
                    <div class="card border-0">
                        <img src="" class="card-img-top imgCover" alt="EventImg" />
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
                            <!-- <h5 class="card-title mt-1 fw-semibold fs-2 text-center mb-4"> {{  }}</h5> -->
                            <p class="card-text fw-medium"></p><br><br>
                            <!-- <p class="card-text fw-semibold"><em>le {{  }} à {{  }}</em></p> -->
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

const event = ref();


const getEvent = async (eventId) => {
    try {
        const response = await axios.get(`http://localhost:1337/api/events/${eventId}`);
        if (response.status === 200) {
            event.value = response.data;
            console.log(event.value)
        }
    } catch (error) {
        console.error(error);
    }
}
getEvent()
</script>