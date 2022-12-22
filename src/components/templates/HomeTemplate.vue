<template>
  <div>
    <Header />
    <main>
      <Banner />
      <About />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../organisms/Header/index.vue'
import Banner from '../organisms/Banner/index.vue'
import About from '../organisms/About/index.vue'

export default defineComponent({
  components: { Header, Banner, About }
})
</script>

<style scoped>

</style>