<template>
  <div>
    <h1>Componente Conteúdo</h1>
    <p>Conteudo - Propriedade $style: {{$style}}</p>
    <div :class="$style['teste1']">Classe Teste1</div>
    <div :id="$style['teste2']">ID Teste 2</div>
    <home></home>
    <publicar-vaga></publicar-vaga>
  </div>
</template>

<script>
import Home from '@/components/views/HomeViews.vue'
import PublicarVaga from '@/components/views/PublicarVaga.vue'
export default {
  name: 'ConteudoComponent',
  components: {
    Home,
    PublicarVaga
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
 .teste1 {
   background-color: red;
 }
 #teste2 {
   background-color: yellow;
 }
 
</style>
