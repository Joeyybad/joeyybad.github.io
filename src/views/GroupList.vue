<template>
    <main>
        <div class="container-fluid">
            <div class="row">
                <h1 class="text-center">Crews</h1>
            </div>
            <div class="row">
                <div class="col-12 d-flex justify-content-center mt-3">
                    <div class="search mb-5">
                        <input placeholder="Recherche" type="text">
                        <button type="submit"><i class="bi bi-search m-2"></i>Go</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-11 mx-auto">
                <h3> Résultats : </h3>
                <table>
                    <thead>
                        <tr>
                            <th>Groupe</th>
                            <th></th>
                            <th>Adresse</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-column="Crew"><RouterLink :to="{name:'Group'}">Legiteam Obxtruxion</RouterLink></td>
                            <td data-column=""></td>
                            <td data-column="Location">Le mans</td>
                            <td data-column=""></td>
                        </tr>
                        <tr>
                            <td data-column="Crew">Chasseur de Prime</td>
                            <td data-column=""></td>
                            <td data-column="Location">Paris</td>
                            <td data-column=""></td>
                        </tr>
                        <tr>
                            <td data-column="Crew">PokemonCrew</td>
                            <td data-column="Last Name"></td>
                            <td data-column="Location">Lyon</td>
                            <td data-column=""></td>
                        </tr>
                       
                    
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>
<style>

</style>