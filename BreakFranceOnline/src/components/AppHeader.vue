<template>
    <header>
        <nav class="navbar navbar-expand-lg navStyle sticky-top mb-2 Knewave">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img
                        src="../assets/image/LogoBreakFranceAppli-removebg-preview-removebg-preview.png"
                        alt="logo BreakFrance" />BreakFrance</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="/FAQ">FAQ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="/"><i class="bi bi-house"></i>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="">S'inscrire</a>
                        </li>

                        <li class='nav-item '>
                            <a class="nav-link text-danger" href=""><i class="bi bi-box-arrow-right text-danger"></i>Se
                                déconnecter</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text-info" href=""> <i class="bi bi-box-arrow-in-left text-info"></i>Se
                                connecter</a>
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
    width: 80px;
    height: auto;
    margin: 2px;
}
</style>