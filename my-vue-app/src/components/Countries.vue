<template>
  <div class="container">
    <h1 class="my-4">Countries</h1>
    <div class="row">
      <div v-for="country in filteredCountries" :key="country.code" class="col-md-4 mb-4">
        <div class="card rounded shadow-sm p-0">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Placeholder image">
          <div class="card-body">
            <h5 class="card-title">{{ country.name }}</h5>
            <p class="card-text"><strong>Continent:</strong> {{ country.continent.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  props: {
    filterText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      countries: []
    };
  },
  computed: {
    filteredCountries() {
      if (!this.filterText.trim()) {
        return this.countries; // Si no hay filtro, mostrar todos los países
      } else {
        const searchTerm = this.filterText.trim().toLowerCase();
        return this.countries.filter(country =>
          country.name.toLowerCase().includes(searchTerm)
        );
      }
    }
  },
  created() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        const response = await axios({
          url: 'https://countries.trevorblades.com/',
          method: 'post',
          data: {
            query: `
              query {
                countries {
                  code
                  name
                  native
                  capital
                  emoji
                  currency
                  languages {
                    code
                    name
                  }
                  continent {
                    name
                  }
                }
              }
            `
          }
        });
        this.countries = response.data.data.countries;
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Añade estilos aquí si es necesario */
body {
  margin: 0;
  padding: 0;
}

.custom-rounded {
  border-radius: 20px;
  /* Ajusta este valor según sea necesario */
}

.card {
  border-radius: 1rem;
}
</style>

<!-- 
            <p class="card-text"><strong>Native Name:</strong> {{ country.native }}</p>
            <p class="card-text"><strong>Capital:</strong> {{ country.capital }}</p>
            <p class="card-text"><strong>Emoji:</strong> {{ country.emoji }}</p>
            <p class="card-text"><strong>Currency:</strong> {{ country.currency }}</p>
            <p class="card-text"><strong>Languages:</strong></p>
             
             <ul class="list-unstyled">
              <li v-for="language in country.languages" :key="language.code">
                {{ language.name }} ({{ language.code }})
              </li>
            </ul>
            -->