<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <topo-padrao @navegar="componente = $event"/>
    <alerta v-if="exibirAlerta">
      <div class="alert alert-success" role="alert">
        <h5>Título do alerta</h5>
        <hr>
        <p>Descrição do alerta</p>
    </div>
    </alerta>
    <conteudo v-if="visibilidade" :conteudo="componente"></conteudo>
  </div>
</template>

<script>
import Alerta from '@/components/comuns/AlertaRegistro.vue'
import Conteudo from '@/components/layouts/ConteudoComponent.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true,
    componente: 'Home',
    exibirAlerta: false
  }),
  components: {
    Alerta,
    Conteudo,
    TopoPadrao,
    VagasFavoritas
  },
  mounted() {
    this.emitter.on('alerta', () => {
      this.exibirAlerta = true
      setTimeout(() => this.exibirAlerta = false, 4000)
      console.log('Apresentar a mensagem de alerta customizada')
    })
  }
}
</script>

<style scoped>
  
</style>
