<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <topo-padrao @navegar="componente = $event"/>
    <alerta v-if="exibirAlerta">
      <h3>Teste 1: Slot Padrão</h3>

      <template v-slot:titulo>
        <h5>Título do alerta</h5>
      </template>

      <div>
        <p><strong>Teste 2: Slot Padrão</strong></p>
      </div>

      <template v-slot:descricao>
        <p>Descrição do alerta</p>
      </template>

      <ul>
        <li>Teste 3: Slot Padrão</li>
        <li>Teste 3: Slot Padrão</li>
        <li>Teste 3: Slot Padrão</li>
      </ul>
      
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
