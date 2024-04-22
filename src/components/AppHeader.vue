<template>
    <header>
        <nav class="navbar navbar-expand-lg navStyle sticky-top mb-2 Knewave">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img
                        src="../assets/image/LogoBreakFranceAppli-removebg-preview-removebg-preview.webp"
                        alt="logo BreakFrance" />BreakFrance</a>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon buttonToggle"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{name:'FAQ'}" class="nav-link" >FAQ</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'Home'}" class="nav-link"><i class="bi bi-house"></i>Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'Register'}" class="nav-link" >S'inscrire</router-link>
                        </li>

                        <li class='nav-item '>
                            <a class="nav-link text-danger" href=""><i class="bi bi-box-arrow-right text-danger"></i>Se
                                déconnecter</a>
                        </li>

                        <li class="nav-item">
                            <router-link :to="{name:'Login'}" class="nav-link" href=""> <i class="bi bi-box-arrow-in-left"></i>Se
                                connecter</router-link>
                        </li>


                        <li class="nav-item">
                            <a class="nav-link text-dark" href="">Evènements</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="">Groupes</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Administration
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item text-dark" href="">Créer un article</a></li>
                                <li><a class="dropdown-item text-dark" href="">Liste utilisateur</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item text-dark" href="#">Something else here</a></li>
                            </ul>
                        </li>


                        <li class="nav-item float-end">

                        </li>

                    </ul>
                    <a href=""><i class="bi bi-person-circle text-dark fs-2 float-end"></i></a>
                </div>
            </div>
        </nav>
    </header>
</template>


<style>
img {
    width: 65px;
    height: auto;
    margin: 2px;
}
.navbar-brand{
    color: #163760;
    text-shadow: 2px 2px 2px white;
}

.navbar-nav .nav-item a.router-link-active:hover{
    color :#0064A3;
    
}
.navbar-nav .nav-item a.router-link-exact-active{
 color: #16a5c9;
}
</style>



