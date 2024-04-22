<template>
    <div class="bloc-modale" v-if="revele">
        <div class="overlay" @click="toggleModale(false)" tabindex="-1"></div>
        <div class="modale card" tabindex="0">
            <button class="btn-modale btn btn-danger" @click="toggleModale(false)" aria-label="Fermer la fenêtre modale">X</button>
            <h2> Fenêtre modale</h2>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modale',
    props: ['revele'],
    methods: {
        toggleModale(revele) {
            this.$emit('update:revele', revele);
        }
    },
    mounted() {
       
        if (this.revele) {
            this.$nextTick(() => {
                this.$el.querySelector('.modale').focus();
            });
        }
    }
}
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
.modale{
    background: #f1f1f1;
    color: #333;
    width: 600px;
    height: 350px;
    padding: 50px;
    position: fixed;
    top: 20%;
}
.btn-modale{
    position: absolute;
    top: 10px;
    right: 10px;
}

@media screen and (max-width: 812px) {
    .modale{
    background: #f1f1f1;
    color: #333;
    width: 350px;
    height: 400px;
    padding: 50px;
    position: fixed;
    top: 25%;
}

}

</style>