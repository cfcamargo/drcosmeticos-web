<template>
  <div class="flex flex-col" :class="checkImagePosition">
      <div class="w-[70%] h-10 bg-rose"/>
      <img :src="`../../src/assets/images/${source}`">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    source: {
      type: String,
      required: true
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