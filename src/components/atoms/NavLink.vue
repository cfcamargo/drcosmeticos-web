<template>
  <div>
    <a :href="to" class="py-4 border-y-2 border-transparent hover:border-b-rose hover:text-rose">{{ text }}</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props : {
    text : {
      type : String,
      required : true
    },
    to : {
      type : String,
      required : true
    }
  }
})
</script>
