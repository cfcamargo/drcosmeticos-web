<template>
  <div class="containeer py-32 grid xs:grid-cols-1 md:grid-cols-2 items-center gap-8" id="about">
    <div>
      <div class="w-[70%] h-10 bg-rose z-10 -mt-10"/>
      <img src="../../../assets/images/about-cover.png" class=" z-50">
    </div>

    <div class="flex flex-col gap-4">
        <h3 class="text-2xl font-bold text-ouro">Sobre Nós</h3>

        <p class="text-ligth-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta cum vero voluptates, debitis similique quam amet. Rem, vero? Recusandae ex labore obcaecati quidem et vel magni fuga molestias impedit itaque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <p class="text-ligth-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta cum vero voluptates, debitis similique quam amet. Rem, vero? Recusandae ex labore obcaecati quidem et vel magni fuga molestias impedit itaque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente placeat sint quo, ullam totam delectus excepturi magni, voluptates itaque non corporis eius quae rem? Repellendus dolorem sit molestiae repellat!
        </p>
    </div>
  </div>
  <div class="w-full h-[4px] bg-rose"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style scoped>

</style>