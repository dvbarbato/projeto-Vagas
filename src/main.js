import { createApp } from 'vue'
import App from './App.vue'

//importar o pacote mitt
import mitt from 'mitt'

// criar a instancia do pacote mitt
const emitter = mitt()

//iniciar a instancia do vue com base no componente
const app = createApp(App)

//configurar a instancia do pacote mitt como sendo uma propriedade global
//essa propriedade estará disponível para todas as instancias de componentes dentro do app
app.config.globalProperties.emitter = emitter

//associar a instancia do Vue com o elemento html de id app
app.mount('#app')


//createApp(App).mount('#app')
