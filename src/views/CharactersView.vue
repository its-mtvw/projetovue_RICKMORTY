<template>
    <div class="container">
        <input v-model="name" type="text" placeholder="Search character" class="search-bar"/>
        <button @click="search" class="search-button">Search</button>
        <ul class="character-list">
            <li v-for="personagem in personagens" :key="personagem.id" class="character-item">
                <img :src="personagem.image" :alt="personagem.name" class="character-image" />
                <p class="character-name">{{ personagem.name }}</p>
                <p class="character-status">Status: {{ personagem.status }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            personagens: [],
            url: "https://rickandmortyapi.com/api/character",
        };
    },
    mounted() {
        fetch(this.url)
            .then((response) => response.json())
            .then((data) => (this.personagens = data.results));
    },
    methods: {
        search() {
            fetch(`${this.url}?name=${this.name}`)
                .then((response) => response.json())
                .then((data) => (this.personagens = data.results));
        },
    },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10rem; /* adjust as needed */
}

.search-bar {
  width: 80%; /* adjust as needed */
  max-width: 300px; /* adjust as needed */
  padding: 0.5rem;
  margin: 2rem auto; /* centers the search bar */
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 16px;
  background-color: rgb(2, 10, 2);
  color: #fff;
}
.search-button {
  width: 90%; /* adjust as needed */
  max-width: 280px; /* adjust as needed */
  padding: 1rem; /* adjust as needed */
  margin: 2rem auto; /* centers the search button */
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 16px;
  background-color: rgb(2, 10, 2); /* same as the body background color */
  color: #fff; /* changed to black for visibility against white background */
}

.character-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
}

.character-card {
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.character-image {
  width: 100%;
  height: auto;
}

.character-name {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}

.character-status {
  font-size: 16px;
  color: #666;
}
</style>