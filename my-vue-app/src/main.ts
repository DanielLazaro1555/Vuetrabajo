// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa los componentes de Vue y tu aplicación principal
import { createApp } from 'vue';
import './style.css'; // Tu archivo de estilos personalizados si los tienes
import App from './App.vue';

// Crea la aplicación Vue y monta tu componente principal en #app
createApp(App).mount('#app');