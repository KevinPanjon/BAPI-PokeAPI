import { createRouter, createWebHistory } from 'vue-router'
import PokemonData from '../components/PokemonData.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
{
    path: '/',
    name: 'PokemonData',
    component: PokemonData
  }
  ,
  ]
})

export default router