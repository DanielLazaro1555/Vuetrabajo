<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <!-- Barra lateral izquierda -->
      <nav class="col-12 col-md-3 col-lg-2 d-md-block bg-secondary sidebar">
        <div class="sidebar-sticky">
          <!-- Contenido de la barra lateral -->
          <div class="nav flex-column">
            <a href="/Logo" class="nav-link text-dark">
              <div class="sidebar-item bg-white rounded p-2 text-center">Logo</div>
            </a>
            <a href="/" class="nav-link text-dark">
              <div class="sidebar-item bg-white rounded p-2 text-start">Home</div>
            </a>
            <a href="/vista1" class="nav-link text-dark">
              <div class="sidebar-item bg-white rounded p-2 text-start">Vista 1</div>
            </a>
            <a href="/vista2" class="nav-link text-dark">
              <div class="sidebar-item bg-white rounded p-2 text-start">Vista 2</div>
            </a>
            <!-- Agrega más elementos de navegación según sea necesario -->
          </div>
        </div>
      </nav>
      <!-- Contenido principal -->
      <main role="main" class="col-12 col-md-9 col-lg-10 px-1">
        <div class="card shadow mb-4 border rounded-pill">
          <h2 class="card-header bg-white text-start py-0">Países</h2>
          <div class="card-body" style="padding: 0%;">
            <div class="input-group mb-0">
              <input type="text" class="form-control border-0 rounded-pill rounded-3" v-model="filterText"
                placeholder="Escribe el país que deseas ver" aria-label="Escribe el país que deseas ver"
                aria-describedby="button-search" @input="filterCountries" style="outline: none;" />
              <div class="input-group-append">
                <button class="btn btn-primary rounded-pill rounded-3" type="button" id="button-search">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Countries :filter-text="filterText" />
        </div>
      </main>
    </div><!-- Fin de la fila (row) -->
  </div><!-- Fin del contenedor (container-fluid) -->
</template>

<script>
import Countries from './components/Countries.vue';

export default {
  name: 'App',
  components: {
    Countries
  },
  data() {
    return {
      filterText: ''
    };
  },
  methods: {
    // Método para manejar la búsqueda
    filterCountries() {
      // Imprime el valor actual de filterText en la consola
      console.log('Texto de búsqueda:', this.filterText);
    }
  }
};
</script>


<style>
.nav-link:hover {
  color: white !important;
}
</style>
