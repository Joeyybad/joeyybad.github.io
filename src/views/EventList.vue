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

                <div class="col-sm-10 col-md-6 col-lg-4">
                    <div class="card border-primary mt-3 mb-3">
                        <img src="" class="card-img-top imgCover" alt="EventImg" />
                        <div class="card-header"></div>
                        <div class="card-body border-success">
                            <h5 class="card-title"> Event Name
                            </h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary"><i class="bi bi-calendar-date"></i> le
                                <br> à
                            </h6>
                            <p class="card-text text-truncate"></p>
                            <p class="card-text"></p>
                            <router-link :to="{ name: 'Event' }"
                                class="card-link btn rounded-pill btn-outline-primary m-1">Voir l'évènement</router-link>



                            <a href="" class="btn rounded-pill btn-warning m-1" v-if="isAdmin">Modifier l'event</a>
                            <button type="button" class="btn rounded-pill btn-danger m-1" data-bs-toggle="modal"
                                data-bs-target="" v-if="isAdmin"> Supprimer l'évènement</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

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

