<template>
  <div>
    <h1>{{ titulo }}</h1>
    <button @click="atualizarComponente()">Atualizar</button>
    <button @click="conteudo = 'home'">Home</button>
    <button @click="conteudo = 'publicar-vaga' ">Publicar Vaga</button>
    <!-- Renderizar de modo dinamico os componentes home e publicar-vaga -->
    <!-- <home></home> -->
    <!-- <publicar-vaga></publicar-vaga> -->
    <component :is="conteudo"></component>
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
    atualizarComponente() {
      this.titulo += '*'
    }
  },
  // Atributo = data
  data: () => ({
    teste: 'O componente foi criado',
    titulo: 'Componente Conteúdo!!',
    conteudo: 'home'
  })
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
