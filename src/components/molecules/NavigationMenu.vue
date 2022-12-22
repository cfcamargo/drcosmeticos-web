<template>
  <div>
      <nav class="flex gap-6 h-20 items-center">
        <NavLink text="Home" :to="'#banner'"/>
        <NavLink text="Sobre" :to="'#about'"/>
        <NavLink text="Produtos" :to="'#products'"/>
        <NavLink text="Depoimentos" :to="'#testimonials'"/>
        <NavLink text="Contato" :to="'#contact'"/>
      </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavLink from '../atoms/NavLink.vue'

export default defineComponent({
  components : { NavLink }
})
</script>
