<template>
  <div class="flex flex-col xs:mx-auto md:m-0" :class="checkImagePosition">
      <div class="w-[70%] h-10 bg-rose"/>
      <img :src="source">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    source: {
      type: String
    },
    invert : {
      type: Boolean,
      required: true
    }
  },
  computed: {
    checkImagePosition() {
     if(this.invert){
      return 'items-end'
     } else {
      return 'items-start'
     }
    }
  },
})
</script>