<template>
  <div>
    <Header />
    <main class="pt-[80px]">
      <Banner />
      <About />
      <Products />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../organisms/Header/index.vue'
import Banner from '../organisms/Banner/index.vue'
import About from '../organisms/About/index.vue'
import Products from '../organisms/Products/index.vue'

export default defineComponent({
  components: { Header, Banner, About, Products }
})
</script>

<style scoped>

</style>