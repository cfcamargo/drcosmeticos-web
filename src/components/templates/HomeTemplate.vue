<template>
  <div>
    <Header />
    <main class="pt-[80px]">
      <Banner />
      <About />
      <Products />
      <Contact />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../organisms/Header/index.vue'
import Banner from '../organisms/Banner/index.vue'
import About from '../organisms/About/index.vue'
import Products from '../organisms/Products/index.vue'
import Contact from '../organisms/Contact/index.vue'
import Footer from '../organisms/Footer/index.vue'

export default defineComponent({
  components: { Header, Banner, About, Products, Contact, Footer}
})
</script>

<style scoped>

</style>