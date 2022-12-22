<template>
  <div>
      <div>

      </div>
      <nav :class="showMenu">
        <NavLink text="Home" :to="'#banner'"/>
        <NavLink text="Sobre" :to="'#about'"/>
        <NavLink text="Produtos" :to="'#products'"/>
        <NavLink text="Depoimentos" :to="'#testimonials'"/>
        <NavLink text="Contato" :to="'#contact'"/>
        <button class="absolute top-6 right-6">X</button>
      </nav>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import NavLink from '../atoms/NavLink.vue'

export default defineComponent({
  components : { NavLink },
  data() {
    return {
      menuIsOpen: false
    }
  },


  computed : {
    showMenu() {
      if(this.menuIsOpen){
        return "fixed inset-0 w-full h-screen bg-white z-50 flex flex-col gap-10 justify-center items-center"
      } else {
        return "hidden"
      }
    }
  }
})
</script>
