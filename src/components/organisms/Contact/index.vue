<template>
  <div class="bg-[#f9f9f9]">
    <div class="containeer py-24 grid xs:grid-cols-1 xs:gap-10 md:gap-0 md:grid-cols-2 items-center">
      <div class="flex flex-col gap-10 xs:pr-0 md:pr-20 xs:w-full md:w-[80%]">
          <h3 class="text-3xl font-bold text-rose">Entre em contato com a gente!</h3>
          <p class="text-ligth-text">Entre em contato com a Dr Cosméticos queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>

          <a href="https://whats.link/drcomesticos" class="flex items-center gap-2 bg-rose xs:w-full md:w-60 h-12 justify-center rounded text-white hover:brightness-90">
            <span><WhatsappIcon :color="text-white" :icon_width="20"/></span>
            <span>Entrar em contato</span>
          </a>
      </div>

      <div class="flex items-center xs:mt-10 md:mt-0">
        <div class="flex flex-col gap-4">
          <p class="flex items-center gap-2">
            <span><InstagramIcon color="text-rose" :icon_width="20"/></span>
            <a href="https://www.instagram.com/dr_cosmeticosbr/"><span class="text-ligth-text">@dr_cosmeticosbr</span></a>
          </p>
          <p class="flex items-center gap-2">
            <span><WhatsappIcon color="text-rose" :icon_width="20"/></span>
            <a href="https://whats.link/drcomesticos"><span class="text-ligth-text">67 9 9208-4022</span></a>
          </p>
          <p class="flex items-center gap-2">
            <span><TelephoneIcon color="text-rose" :icon_width="20"/></span>
            <span class="text-ligth-text">67 3431-0000</span>
          </p>
          <p class="flex items-center gap-2">
            <span><MailIcon color="text-rose" :icon_width="20"/></span>
            <a href="mailto:drcosmeticospp@gmail.com"><span class="text-ligth-text">drcosmeticospp@gmail.com</span></a>
          </p>
          <p class="flex items-center gap-2">
            <span><MapIcon color="text-rose" :icon_width="20"/></span>
            <a href="https://goo.gl/maps/WEvE7CyhxzoBecY77"><span class="text-ligth-text">Av Marechal Floriano, 2804 - Ponta Porã - MS</span></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InstagramIcon from '../../atoms/Icons/Instagram.vue'
import WhatsappIcon from '../../atoms/Icons/Whatsapp.vue'
import MailIcon from '../../atoms/Icons/Mail.vue'
import MapIcon from '../../atoms/Icons/Map.vue'
import TelephoneIcon from '../../atoms/Icons/Telephone.vue'

export default defineComponent({
  components : { WhatsappIcon, MailIcon, MapIcon, TelephoneIcon, InstagramIcon }
})
</script>
