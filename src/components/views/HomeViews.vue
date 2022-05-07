<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4">
        <indicador-vaga></indicador-vaga>
      </div>

      <div class="col-4">
        <indicador-vaga></indicador-vaga>
      </div>

      <div class="col-4">
        <indicador-vaga></indicador-vaga>
      </div>

    </div>
  </div>
</template>

<script>
import IndicadorVaga from '@/components/comuns/IndicadorVaga.vue'
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'
export default {
  components: {
    IndicadorVaga,
    PesquisarVaga
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>