<template>
  <div class="z-50">
      <button class="w-8 h-[80px]" @click="toogleMenu">
        <HamburguerIcon />
      </button>
      <Transition>
        <nav v-show="menuIsOpen" :class="menuMobileStyleAndAnimations">
          <NavLink text="Home" :to="'#banner'" @click="toogleMenu"/>
          <NavLink text="Sobre" :to="'#about'" @click="toogleMenu"/>
          <NavLink text="Produtos" :to="'#products'" @click="toogleMenu"/>
          <!-- <NavLink text="Depoimentos" :to="'#testimonials'" @click="toogleMenu"/> -->
          <NavLink text="Contato" :to="'#contact'" @click="toogleMenu"/>
          <button class="absolute top-8 right-9 w-4" @click="toogleMenu">
            <CloseMenuIcon />
          </button>
        </nav>
      </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavLink from '../atoms/NavLink.vue'
import HamburguerIcon from '../atoms/HamburguerIcon.vue'
import CloseMenuIcon from '../atoms/CloseMenuIcon.vue'

import 'animate.css';

export default defineComponent({
  components : { NavLink, HamburguerIcon, CloseMenuIcon },
  data() {
    return {
      menuIsOpen: false
    }
  },
  methods: {
    toogleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    }
  },
  computed : {
    menuMobileStyleAndAnimations(){
      if(this.menuIsOpen){
        return "fixed inset-0 w-full h-screen bg-white z-50 flex flex-col gap-10 justify-center items-center animate__animated animate__slideInDown"
      }
      else {
        return "fixed inset-0 w-full h-screen bg-white z-50 flex flex-col gap-10 justify-center items-center animate__animated animate__slideOutUp"
      }
    }
  },
  created () {
    window.onresize = () =>{
      if(this.menuIsOpen) {
        this.menuIsOpen = false
      }
    } ;
  },
})
</script>
