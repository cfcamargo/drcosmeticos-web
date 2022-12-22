<template>
  <div class="h-[calc(100vh_-_80px)] w-full flex items-center justify-between bg-[#F9F9F9]" id="banner">
    <div class="containeer flex gap-8 items-center">
      <div class="flex flex-col items-start gap-4 max-w-md">
          <h1 class="text-4xl font-bold text-ouro w-full">
            Essências da linha Via Aroma.
          </h1>
          <p class="text-ligth-text">Possuímos uma vasta opções de essências e produtos para seu bem estar pessoal.</p>
          <button class="px-10 py-4 rounded bg-rose text-white hover:brightness-90">
            Quero Conhecer
          </button>
      </div>

      <div class="flex justify-end w-full"> 
        <div class="w-[25%] h-[30%] bg-rose absolute z-0 -mt-10"/>
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