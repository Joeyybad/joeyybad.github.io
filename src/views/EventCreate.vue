<template>
    <main>
        <div class="container mt-5">
            <form action="" method="">
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="eventName" class="mb-2 fs-4">Nom de l'événement</label>
                            <input type="text" id="eventName" name="eventName" class="form-control border-info-subtle"
                                aria-label="Nom de l'événement" aria-required="true">
                        </div>
                    </div>

                </div>
                <div class="form-group mt-4">
                    <label for="eventDescription" class="mb-2 fs-4">Description de l'événement</label>
                    <textarea id="eventDescription" name="eventDescription" class="form-control border-info-subtle" rows="4"
                        aria-label="Description de l'événement" aria-required="true"></textarea>
                </div>
                <div class="row align-items-center">
                    <div class="form-group col-6 mt-2">
                        <label for="eventDate" class="mb-2 fs-4"> <i class="bi bi-calendar m-2"></i>Date</label>
                        <input type="date" id="eventDate" name="eventDate" class="form-control border-info-subtle"
                            aria-label="Date de l'événement" aria-required="true">
                    </div>
                    <div class="form-group col-6 mt-2">
                        <label for="eventTime" class="mb-2 fs-4"> <i class="bi bi-watch"></i>Heure l'événement</label>
                        <input type="time" id="eventTime" name="eventTime" class="form-control border-info-subtle"
                            placeholder="Par exemple 16:00" aria-label="Heure de l'événement" aria-required="true">
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="form-group col-4 mt-4">
                        <label for="address" class="mb-2 fs-4"><i class="bi bi-geo-alt m-2"></i>Lieu de l'événement</label>
                        <input type="text" id="address" name="address" class="form-control border-info-subtle"
                            aria-label="Lieu de l'événement" aria-required="true">
                    </div>
                    <div class="form-group col-4 mx-auto mt-4">
                        <label for="playersNumber" class="mb-2 fs-4"><i class="bi bi-person-fill-add m-2"></i> Nombre
                            d'inscrits</label>
                        <input type="number" id="playersNumber" name="playersNumber" class="form-control border-info-subtle"
                            aria-label="Nombre de joueurs" aria-required="true">
                    </div>
                </div>

                <!--  Alert error message -->
                <!-- <div class="mb-3">
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> -->
                <button type="button" class=" btn btn-info mt-5 mb-2" v-on:click="eventCheck">Créer l'événement</button>
            </form>
        </div>
    </main>
</template>

<script setup>
 import {eventCheck} from '@/assets/script.js/EventCheck'
</script>