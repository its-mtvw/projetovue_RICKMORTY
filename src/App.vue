<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Subtitle from './components/Subtitle.vue'
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';

const isLoggedIn = ref(false);
const userEmail = ref<string | null>(null); // New ref for the user email
const auth = getAuth(); // Initialize auth immediately

onMounted(() => {
  onAuthStateChanged(auth, (user: User | null) => {
    if (user) {
      isLoggedIn.value = true;
      userEmail.value = user.email; // Update the user email
    } else {
      isLoggedIn.value = false;
      userEmail.value = null; // Clear the user email
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    console.log('User signed out successfully');
  }).catch((error) => {
    console.log(error.message);
  });
};
</script>

<template>
  <header class="header1">
    <img alt="rickmorty" class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/characters">Characters</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/signup">Signup</RouterLink>
        <RouterLink to=""v-if="isLoggedIn">Logged in as: {{ userEmail }}</RouterLink>
        <RouterLink to=""@click="handleSignOut" v-if="isLoggedIn">logout</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  
<Subtitle/>
</template>



<style>
header {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: calc(var(--section-gap) / 2);
  padding-right: calc(var(--section-gap) / 2);
}
.button2{
  background-color: rgb(2, 10, 2)
}
.header1 {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display: flex;
  justify-content: center;
  width: 100%;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
  display: block;
  margin: 0 auto 2rem;
  width: 300px; /* adjust as needed */
  height: auto; /* keeps the aspect ratio */
}

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
