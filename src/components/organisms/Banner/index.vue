<template>
  <div class="h-[calc(100vh_-_80px)] w-full flex items-center justify-between bg-[#F9F9F9]" id="banner">
    <div class="containeer flex xs:flex-col md:flex-row xs:gap-2 md:gap-8 items-center">
      <div class="flex flex-col xs:justify-center md:items-start gap-4 max-w-md">
          <h1 class="xs:text-2xl xs:text-center md:text-start md:text-4xl font-bold text-ouro w-full">
            Essências da linha Via Aroma.
          </h1>
          <p class="text-ligth-text xs:text-center md:text-start">Possuímos uma vasta opções de essências e produtos para seu bem estar pessoal.</p>
          <a href="https://whats.link/drcomesticos" class="px-10 py-4 rounded bg-rose text-white hover:brightness-90 xs:w-full md:w-auto xs:mb-4 md:mb-0 flex justify-center">
            Quero Conhecer
          </a>
      </div>

      <div class="flex xs:justify-center md:justify-end w-full"> 
        <div class="md:block xs:hidden w-[25%] h-[30%] max-w-[400px] bg-rose absolute z-0 -mt-10"/>
        <img src="../../../assets/images/banner.png" class="z-10">
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>