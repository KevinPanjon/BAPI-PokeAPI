<script setup>
import { onMounted, ref } from 'vue';
import { PokemonList } from '../services/ApiService.js';
const pokemons = ref([]);

onMounted(async () => {
  pokemons.value = await PokemonList();
});
</script>

<template>
  <div class="poke-container">
    <div class="pokemon" v-for="pokemon in pokemons" :key="pokemon.id">
      <div class="img-container">
        <img :src="pokemon.image" alt="Pokemon" />
      </div>
      <div class="info">
        <div class="number">{{ pokemon.id }}</div>
        <div class="name">{{ pokemon.name }}</div>
        <div class="types">{{ pokemon.types }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

@import url("https://fonts.googleapis.com/css?family=Lato:300,400&display=swap");

* {
  box-sizing: border-box;
}

body {
  background: #efefbb;
  background: linear-gradient(to right, #d4d3dd, #efefbb);
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
}

h1 {
  letter-spacing: 3px;
}

.poke-container {
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
}

.pokemon {
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
}

.pokemon .img-container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
}

.pokemon .img-container img {
  max-width: 90%;
  margin-top: 20px;
}

.pokemon .info {
  margin-top: 20px;
}

.pokemon .info .number {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.8em;
}

.pokemon .info .name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
}
</style>
