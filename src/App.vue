<template>
  <div>
    <topo-padrao/>
    <conteudo></conteudo>
  </div>
</template>

<script>
import Conteudo from './components/layouts/ConteudoComponent.vue'
import TopoPadrao from './components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  components: {
    Conteudo,
    TopoPadrao
  }
}
</script>

<style>

</style>
