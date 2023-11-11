<template>
  <div class="country-grid">
    <div v-for="country in countries" :key="country.code" class="country-card">
      <div class="country-info">
        <div class="image-container">
          <img :src="'/imagen.jpg'" alt="Country Image" class="country-image" />
        </div>
        <div class="text-container">
          <div class="flag-container">
            <img :src="getFlagUrl(country.code)" alt="Flag" class="flag" />
          </div>
          <div class="text-content">
            <h2>{{ country.name }}</h2>
            <p class="continent-name">{{ country.continent.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countries: [],
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        const response = await fetch('https://countries.trevorblades.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              {
                countries {
                  code
                  name
                  continent {
                    name
                  }
                }
              }
            `,
          }),
        });

        const { data } = await response.json();
        this.countries = data.countries;
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    },
    getFlagUrl(countryCode) {
      // Utilizando flagcdn.com
      return `https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`;
    },
  },
};
</script>

<style scoped>

#app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Ajusta la altura según tus necesidades */
}

/* Agrega estilos según sea necesario */
.country-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
}

.country-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  max-width: 70%;
  margin: 0 auto; /* Centra la tarjeta en el contenedor */
}



.country-info {
  margin-top: 10px;
}

.continent-name {
  color: #555; /* Color gris para el nombre del continente */
  margin-top: 5px; /* Espacio entre el nombre del país y el nombre del continente */
}

.image-container {
  position: relative;
}

.flag-container {
  margin-left: 0; /* Elimina el margen izquierdo */
  margin-right: 5px; /* Espacio entre la bandera y el texto */
  align-self: center; /* Centra verticalmente el .flag-container */
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px; /* Altura del fondo blanco en la parte inferior */
  background-color: white; /* Color del fondo blanco */
  z-index: 1; /* Asegura que el fondo blanco esté sobre la imagen */
}

.flag {
  width: 70px; /* Ancho más grande de las banderas */
  height: 60px; /* Altura más grande de las banderas */
  align-self: center; /* Alinea la bandera en el centro vertical del contenedor */
  z-index: 2; /* Asegura que la bandera esté sobre el fondo blanco */
}

.country-image {
  width: 100%; /* Ocupa todo el ancho del contenedor */
  height: auto; /* Permite que la altura se ajuste automáticamente según el ancho */
  margin-top: -10px; /* Ajusta el margen superior para superponer la imagen sobre el contenido */
  z-index: 0; /* Asegura que la imagen esté detrás del fondo blanco y la bandera */
}

.text-container {
  display: flex;
  font-size: 10px;
  align-items: flex-start;
  position: relative;
  z-index: 2; /* Asegura que el contenido de texto esté sobre la imagen y el fondo blanco */
  background-color: white; /* Fondo blanco */
  padding: 10px; /* Espaciado interno para mejorar la legibilidad */
  border-radius: 0 0 10px 10px; /* Ajusta el radio de borde para que coincida con la esquina de la imagen */
}

.text-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}


/* ... otros estilos ... */
</style>