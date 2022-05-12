<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga v-bind="vaga"/>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-4">
        <indicador-vaga titulo="Vagas abertas" indicador="100" bg="bg-dark" color="text-white"></indicador-vaga>
      </div>

      <div class="col-4">
        <indicador-vaga titulo="Profissionais Cadastrados" indicador="225" bg="bg-dark" color="text-white"></indicador-vaga>
      </div>

      <div class="col-4">
        <indicador-vaga titulo="Visitantes Online" :indicador="usuariosOnline" bg="bg-white" color="text-dark"></indicador-vaga>
      </div>
    </div>
  </div>
</template>

<script>
import IndicadorVaga from '@/components/comuns/IndicadorVaga.vue'
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'
import VagaComuns from '@/components/comuns/VagaComuns.vue'


export default {
  components: {
    IndicadorVaga,
    PesquisarVaga,
    vaga:VagaComuns
  },
  data: () => ({
    usuariosOnline: 0, 
    vagas: []
  }),
  methods: {
    getUsuariosOnline() {
     this.usuariosOnline = Math.floor(Math.random() * 101)
    }
  },
  created() {
    setInterval(this.getUsuariosOnline, 2000)
  },

 activated() {
    this.vagas = JSON.parse(localStorage.getItem('vagas'))
  },

  mounted() {
    this.emitter.on('filtrarVagas', vaga => {

      const vagas = JSON.parse(localStorage.getItem('vagas'))
      this.vagas = vagas.filter(reg => reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())) //true ou false: O método filter cria um novo array com todos os elementos que passaram no teste implementado na função
      
    })
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>