<template>
    <div class="signup-container">
        <h1>Sign Up</h1>
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const register = () => {
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("Successfully created new user!");
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
    }

    return {
      email,
      password,
      register
    }
  }
}
</script>

<style scoped>
.signup-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* takes up the full viewport height */
    margin: 0 auto; /* centers the container horizontally */
}
h1 {
    margin-top: 3rem;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #fff; /* white border */
    padding: 1rem; /* space between the border and the form content */
    width: 100%; /* takes up the full width of the .login-container */
    max-width: 500px; /* adjust as needed */
}
.form-group {
    display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
    display: block;
    font-weight: bold;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button[type="submit"] {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>