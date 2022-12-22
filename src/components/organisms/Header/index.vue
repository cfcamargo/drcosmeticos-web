<template>
  <header class="fixed w-full bg-white shadow-sm z-50">
    <div class="flex items-center justify-between containeer">
      <div class="w-16">
        <Logo />
      </div>
      <div class="xs:hidden md:block">
        <NavigationMenu />
      </div>
      <div class="xs:block md:hidden">
        <NavigationMenuMobile />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '../../atoms/Logo.vue'
import NavigationMenu from '../../molecules/NavigationMenu.vue'
import NavigationMenuMobile from '../../molecules/NavigationMenuMobile.vue'

export default defineComponent({
  components : { Logo, NavigationMenu, NavigationMenuMobile }

})
</script>
