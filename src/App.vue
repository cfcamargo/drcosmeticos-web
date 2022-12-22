<template>
  <div>  
    <Home />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from '../src/components/pages/Home.vue'

export default defineComponent({
  components : { Home }

})
</script>