<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="../assets/image/59129546_586103048549993_8823652534561275904_o.jpeg" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="../assets/image/format-page-Facebook.png" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="../assets/image/b-boy-mathis-red-bull-bc-one-camp-france-2022.avif" alt="Third slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>
<script>
export default {
  mounted() {
    // Initialisation du carrousel Bootstrap
    const myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
      interval: 2000 // Interval de transition en millisecondes (optionnel)
    });
  }
}
</script>



