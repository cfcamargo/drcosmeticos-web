<template>
  <div class="h-[calc(100vh_-_80px)] w-full flex items-center justify-between bg-[#F9F9F9]" id="banner">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="containeer flex xs:flex-col md:flex-row xs:gap-2 md:gap-4 items-center">
          <div class="flex flex-col xs:justify-center md:items-start gap-4 w-full">
              <h4 class="xs:text-md xs:text-center md:text-start md:text-4xl font-bold text-red-600 w-full">
                Sorteio
              </h4>
              <h1 id="valentines-day" class="xs:text-2xl xs:text-center md:text-start md:text-5xl font-bold text-red-600 w-full -mt-3">
                Dia Dos Namorados
              </h1>
              <p class="xs:text-center md:text-start text-7xl text-green-700" id="kit-bambo">Kit São Lourenço Bambo</p>
              <p class="flex flex-col justify-start xs:items-center md:items-start text-xs -mt-4" id="descript">
                <span>Perfume de ambiente - Colônia para tecidos</span>
                <span>Loção hidratante - Sabonete líquido</span>
              </p>
              <span class="text-red-600 text-sm">
                Sorteio no dia 14/02/2023 as 14:00hs
              </span>
              <a href="https://www.instagram.com/p/CoH1tdHO5g3/?utm_source=ig_web_button_share_sheet" target="_blank" class="px-10 py-4 rounded bg-red-600 text-white hover:brightness-90 xs:w-full md:w-auto xs:mb-4 md:mb-0">
                Participar do Sorteio
              </a>
          </div>

          <div class="flex xs:justify-center md:justify-end w-[50%]">
              <img src="../../../assets/images/valentines.png" class="z-10">
            </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="containeer flex xs:flex-col md:flex-row xs:gap-2 md:gap-8 items-center">
          <div class="flex flex-col xs:justify-center md:items-start gap-4 max-w-md">
              <h1 class="xs:text-2xl xs:text-center md:text-start md:text-4xl font-bold text-ouro w-full">
                Essências da linha Via Aroma.
              </h1>
              <p class="text-ligth-text xs:text-center md:text-start">Possuímos uma vasta opções de essências e produtos para seu bem estar pessoal.</p>
              <a href="https://whats.link/drcomesticos" class="px-10 py-4 rounded bg-rose text-white hover:brightness-90 xs:w-full md:w-auto xs:mb-4 md:mb-0">
                Quero Conhecer
              </a>
          </div>

          <div class="flex xs:justify-center md:justify-end w-full">
            <div class="md:block xs:hidden w-[25%] h-[30%] bg-rose absolute z-0 -mt-10"/>
            <img src="../../../assets/images/banner.png" class="z-10">
          </div>
        </div>
      </swiper-slide>
    </swiper>


  </div>
</template>

<script lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  import '../../../assets/css/swipper.css';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Island+Moments&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#valentines-day{
  font-family: 'Leckerli One', cursive;
}

#kit-bambo {
  font-family: 'Island Moments', cursive;
}

#descript {
  font-family: 'Poppins', sans-serif;
}

</style>