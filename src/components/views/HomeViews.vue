<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <lista-vagas>
      <!-- <template v-slot:titulo="slotProps">
        {{slotProps.dadosTitulo.titulo}}
        <hr>
      </template>

      <template v-slot:default="slotProps">
        {{slotProps.vagas}}
        <hr>
      </template>

      <template v-slot:rodape="slotProps">
        {{slotProps.dadosRodape.titulo}}
        <hr>
      </template> -->
    </lista-vagas>

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
import ListaVagas from '@/components/comuns/ListaVagas.vue'
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'



export default {
  components: {
    IndicadorVaga,
    ListaVagas,
    PesquisarVaga,
    
  },
  data: () => ({
    usuariosOnline: 0, 
    
  }),
  methods: {
    getUsuariosOnline() {
     this.usuariosOnline = Math.floor(Math.random() * 101)
    }
  },
  created() {
    setInterval(this.getUsuariosOnline, 2000)
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>