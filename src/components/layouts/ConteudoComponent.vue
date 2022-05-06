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
  },
  methods: {

  },
  // beforeCreate() {
  //   console.log('antes de criar')
  // },
  // created() {
  //   console.log('criado')
  // },
  // beforeMount(){
  //   console.log('antes de montar')
  // },
  // mounted() {
  //   console.log('montado')
  // },
  // beforeUpdate() {
  //   console.log('antes de atualizar')
  // },
  // updated() {
  //   console.log('atualizado')
  // },
  // beforeUnmount() {
  //   console.log('Antes de desmontar/destruir')
  // },
  // unmounted() {
  //   console.log('Desmontado/ Destruido')
  // },
  // errorCaptured: () => {
  //   console.log('Erro Capturado')
  // },
  // renderTracked() {
  //   console.log('Re-renderização rastreada')
  // },
  // renderTriggered() {
  //   console.log('Re-renderização é acionada')
  // },
  // activated() {
  //   console.log('Componente é ativado')
  // },
  // deactivated() {
  //   console.log('Componente é desativado')
  // },
  
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
