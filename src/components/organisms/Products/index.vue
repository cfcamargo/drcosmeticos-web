<template>
  <div class="py-20">
    <div class="containeer">
        <header class="mx-auto w-full px-6 max-w-xl text-center flex flex-col gap-8">
          <h2 class="text-3xl font-bold text-ouro">Nossos Produtos</h2>
          <p class="text-ligth-text">Trabalhamos com uma vasta linha de aromatizantes, óleos, difusores, e cosméticos em geral. Com representações das linhas Via Aroma, Bioage, Racco entre outras</p>
        </header>

        <div class="grid xs:grid-cols-1 md:grid-cols-2 mt-36 xs:justify-center md:items-center gap-8">
          <ImageCover source="products/aromatizador.png" :invert="false" />
          <div class="flex flex-col gap-8 xs:text-center md:xs:text-center md:text-end">
            <h2 class="font-bold text-2xl text-ouro">Aromatizador Elétrico</h2>
            <p class="text-ligth-text">O Aromatizador Elétrico viabiliza o uso de de essências e óleos essenciais com praticidade, economia e segurança.</p>
            <p class="text-ligth-text">Pode ser utilizado em qualquer ambiente, adicionando 15 gotas de essência aromática ou óleo essencial para que o ambiente  mantenha-se aromatizado por até 4 horas.</p>
          </div>
        </div>

        <div class="grid xs:grid-cols-1 md:grid-cols-2 mt-36 xs:justify-center md:items-center gap-8">
          <div class="flex flex-col gap-8 xs:text-center md:text-start xs:order-last md:order-first">
            <h2 class="font-bold text-2xl text-ouro">Essências Via Aroma</h2>
            <p class="text-ligth-text">Nossas essências possuem grande qualidade e variedade, são mais de cinquenta aromas divididos em sete famílias olfativas. A embalagem do produto é de vidro cor âmbar para proteger o conteúdo, o rótulo informa o aroma, e cada aroma possui uma cor e uma estampa específica.</p>
            <p class="text-ligth-text">Combina nossos aromas para ambientes sociais, como escritórios ou salas de reuniões, assim como, por seu toque balsâmico também deixa o lar acolhedor e aconchegante.</p>
          </div>
          <ImageCover source="products/essencia.png" :invert="true" />
        </div>

        <div class="grid xs:grid-cols-1 md:grid-cols-2 mt-36 xs:justify-center md:items-center gap-8">
          <ImageCover source="products/agua-perfumada.png" :invert="false" />
          <div class="flex flex-col gap-8 xs:text-center md:text-end">
            <h2 class="font-bold text-2xl text-ouro">Água Perfumada</h2>
            <p class="text-ligth-text">Versátil e prática, pode ser utilizado em cortinas, lençóis, estofados e roupas em geral, também facilita na hora de passar as roupas. Utilize também em roupas recém-lavadas, tanto no varal, quanto na secadora. Aplique em cortinas com as janelas abertas, assim o vento irá espalhar o aroma pela casa.</p>
          </div>
        </div>

        <div class="grid xs:grid-cols-1 md:grid-cols-2 mt-36 xs:justify-center md:items-center gap-8">
          <div class="flex flex-col gap-8 xs:text-center md:text-start xs:order-last md:order-first">
            <h2 class="font-bold text-2xl text-ouro">Home Spray</h2>
            <p class="text-ligth-text">O Home Spray é versátil, de fácil aplicação, a intensidade é controlada, o usuário define a quantidade de essência aspergida. Pode ser utilizado em ambientes e momentos variados. Cada aspergida aromatiza 3m² e a fixação é de 30 a 60 minutos, aproximadamente.</p>
          </div>
          <ImageCover source="products/home-spray.png" :invert="true" />
        </div>

        <div class="grid xs:grid-cols-1 md:grid-cols-2 mt-36 xs:justify-center md:items-center gap-8">
          <ImageCover source="products/difusor.png" :invert="false" />
          <div class="flex flex-col gap-8 xs:text-center md:text-end">
            <h2 class="font-bold text-2xl text-ouro">Difusor de varetas</h2>
            <p class="text-ligth-text">O Difusor de Varetas aromatiza de forma contínua e suave, as varetas de madeira são ótimos veículos para a propagação do aroma. Além disso, decora o ambiente com sofisticação e elegância. Indicados para aromatização e decoração de banheiros e lavabos.</p>
            <p class="text-ligth-text">O Difusor inclui 8 varetas de madeira para evaporar a fragrância, basta remover a tampa do frasco e inserir as varetas. Para aumentar a intensidade vire as varetas uma vez ao dia para uma maior liberação do aroma. A fórmula evapora ao longo do tempo e, depende da temperatura ambiente, os difusores permanecem perfumados por cerca de 90 dias.</p>
          </div>
        </div>

        <div class="grid xs:grid-cols-1 md:grid-cols-2 mt-36 xs:justify-center md:items-center gap-8">
          <div class="flex flex-col gap-8 xs:text-center md:text-start xs:order-last md:order-first">
            <h2 class="font-bold text-2xl text-ouro">Linha POETA By  Bioage</h2>
            <p class="text-ligth-text">Uma linha de tratamento home care vegana , livre de corantes, parabenos e metais pesados.Conta com a exclusiva TECNOLOGIA HYLADERM 10 - 10tipos de ácido hialurônico que agem na hidratação e regeneração do tecido cutâneo.</p>
          </div>
          <ImageCover source="products/poeta.png" :invert="true" />
        </div>

        <div class="grid xs:grid-cols-1 md:grid-cols-2 mt-36 xs:justify-center md:items-center gap-8">
          <ImageCover source="products/suplemento.png" :invert="false" />
          <div class="flex flex-col gap-8 xs:text-center md:text-end xs:justify-center md:items-end">
            <h2 class="font-bold text-2xl text-ouro">Suplemento Lipo Redux</h2>
            <ul class="xs:w-full md:w-3/5">
              <li>- Reduz o acúmulo de liquido.</li>
              <li>- Acelera o metabolismo.</li>
              <li>- Reduz gordura e celulite.</li>
              <li>- Ajuda a quebrar as moléculas de gordura.</li>
              <li>- Peptídeos De colágeno puro.</li>
              <li>- Rico em colágeno l e lll - principais tipos de colágeno relacionados  aos cuidados da pele.</li>
            </ul>
          </div>
        </div>

        <div class="grid xs:grid-cols-1 md:grid-cols-2 mt-36 xs:justify-center md:items-center gap-8">
          <div class="flex flex-col gap-8 xs:text-center md:text-start xs:order-last md:order-first">
            <h2 class="font-bold text-2xl text-ouro">Linha Vitamina C</h2>
            <p class="text-ligth-text">Auxilia na uniformização e rejuvenescimento da pele, combate radicais livres e protege contra agressões externas e promove uma melhora geral na textura.</p>
          </div>
          <ImageCover source="products/vitamina.png" :invert="true" />
        </div>

        <div class="grid xs:grid-cols-1 md:grid-cols-2 mt-36 xs:justify-center md:items-center gap-8">
          <ImageCover source="products/acne.png" :invert="false" />
          <div class="flex flex-col gap-8 xs:text-center md:text-end">
            <h2 class="font-bold text-2xl text-ouro">Linha Bioage Bio-Acne Solution</h2>
            <p class="text-ligth-text">Age no combate à acne e previne lesões acneicas por meio de tecnologia probiótica, desenvolvida para proporcionar a redução das bactérias em desequilíbrio que favorecem o surgimento da acne, regula a oleosidade excessiva e reduz a vermelhidão da acne.</p>
          </div>
        </div>

        <div class="grid xs:grid-cols-1 md:grid-cols-2 mt-36 xs:justify-center md:items-center gap-8">
          <div class="flex flex-col gap-8 xs:text-center md:text-start xs:order-last md:order-first">
            <h2 class="font-bold text-2xl text-ouro">Linha  Higiene Íntima Racco</h2>
            <p class="text-ligth-text">Da mesma maneira que precisamos cuidar da nossa saúde, investir em uma alimentação balanceada, com nutrientes e vitaminas, praticar exercícios físicos, escovar os dentes e tomar banho, precisamos cuidar na nossa higiene íntima.</p>
            <p class="text-ligth-text">Dentro desse contexto, pensando em todos os seus cuidados e em toda a sua saúde, temos uma linha inteira para os seus cuidados íntimos, garantindo a sua higiene e disposição para enfrentar o dia ou dormir relaxada.</p>
          </div>
          <ImageCover source="products/racco.png" :invert="true" />
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageCover from '../../molecules/ImageCover.vue'

export default defineComponent({
  components : { ImageCover }
})
</script>