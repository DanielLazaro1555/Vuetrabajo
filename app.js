// Asegúrate de que Vue esté correctamente importado o incluido en tu proyecto
const { createApp, ref } = Vue;

// Define el componente con el template
const App = {
  template: `
    <h1>Hola Mundo</h1>
    <p>Desde app.js</p>
  `
};

// Crea la aplicación
const app = createApp(App);

// Monta la aplicación en el elemento con id 'myapp'
app.mount('#myapp');
