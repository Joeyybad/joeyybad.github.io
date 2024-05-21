<template>
    <main>
        <h1 class="text-center">Créer un groupe</h1>

        <div class="container mt-5">
            <form action="" method="POST">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="groupName" class="mb-2 fs-4"> Nom du groupe</label>
                            <input type="text" id="groupName" name="groupName" class="form-control border-primary-subtle">
                        </div>
                    </div>

                </div>

                <div class="form-group mt-4">
                    <label for="groupDescription" class="mb-2 fs-4"><i class="bi bi-vector-pen"></i> Description
                        groupe</label>
                    <textarea id="groupDescription" name="groupDescription" class="form-control border-primary-subtle"
                        rows="4"></textarea>
                </div>
                <div class="row align-items-center">
                    <div class="form-group col-6 mt-4">
                        <label for="groupCity" class="mb-2 fs-4"><i class="bi bi-geo-alt-fill fs-3 m-2"></i>Ville</label>
                        <input type="text" id="groupCity" name="groupCity" class="form-control border-primary-subtle">
                    </div>
                    <div class="form-group col-6 mt-4">
                        <label for="imgGroup" class="mb-2 fs-4"><i class="bi bi-image-fill  fs-3 m-2"></i> Image</label>
                        <input type="text" id="imgGroup" name="imgGroup" class="form-control border-primary-subtle">
                    </div>
                </div>



                <!-- Errors
            <div v-if="errors"></div>
            <div class="mb-3">
                <div v-for="error in errors">
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                </div>
            </div> -->

                <!-- {{ #if error }}
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                {{ error }}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            {{ /if}} -->


                <button type="button" class="btn rounded-pill btn-outline-primary mt-5 mb-2" v-on:click="groupCheck">Enregistrer le groupe</button>
            </form>
        </div>
    </main>
</template>

<script setup>

import {groupCheck} from '@/assets/script/GroupCheck';

</script>