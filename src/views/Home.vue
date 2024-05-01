<template>
        <h2 class="text-start "> A la une</h2>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/image/format-page-Facebook.webp" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item active">
                    <img src="../assets/image/59129546_586103048549993_8823652534561275904_o.webp" class="d-block w-100"
                        alt="...">
                </div>
                <div class="carousel-item active">
                    <img src="../assets/image/b-boy-mathis-red-bull-bc-one-camp-france-2022.webp" class="d-block w-100"
                        alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="row">
            <div class=" mx-auto">
                <a href="" class="btn float-end mt-1 me-5">
                    <div class="container">
                        <router-link :to="{name:'Eventlist'}"><button class="button">Voir les évènements</button></router-link>
                        <span class="arrow first">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                                </path>
                            </svg>
                        </span>
                        <span class="arrow second">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                                </path>
                            </svg>
                        </span>
                        <span class="arrow third">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </a>
            </div>
        </div>
        <div class="row">
            <div col="col-12">
                <h2> Autour de moi </h2>
                <div class="search mb-5">
                    <input placeholder="Recherche" type="text">
                    <button type="submit"><i class="bi bi-search m-2"></i>Go</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-11 mx-auto">
                <h3> Résultats : </h3>
                <table>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th></th>
                            <th>Adresse</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-column="Event"> <router-link :to="{name:'Event'}">Battle of the year</router-link> </td>
                            <td data-column=""></td>
                            <td data-column="lieux">Le mans , France</td>
                            <td data-column=""></td>
                        </tr>
                        <tr>
                            <td data-column="Event">Chill in the city</td>
                            <td data-column=""></td>
                            <td data-column="lieux">Paris rue turbigo</td>
                            <td data-column=""></td>
                        </tr>
                        <tr>
                            <td data-column="Event"> HipHop Session </td>
                            <td data-column=""></td>
                            <td data-column="lieux">Nantes</td>
                            <td data-column=""></td>
                        </tr>
                       
                    
                    </tbody>
                </table>
            </div>
        </div>
</template>

<style>
#carouselExampleControls .carousel-item img {
    object-fit: cover;
    object-position: center;
    height: 75vh;
    min-height: 250px;
    overflow: hidden;
}

h2 {
    font-family: "Inria", sans-serif;
    font-weight: bold;
    margin: 4px 0px 10px 8px;
}

h3 {
    font-family: "Inria", sans-serif;
    font-weight: bold;
    color: #0064A3;
}

table {
    -webkit-box-shadow: 9px 9px 18px -1px rgba(46, 46, 46, 0.9);
    box-shadow: 9px 9px 18px -1px rgba(46, 46, 46, 0.9);
    margin-bottom: 10px;
}

</style>


