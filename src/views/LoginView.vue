<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" id="email" v-model="email" />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" />
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="errMsg">{{ errMsg }}</p>
        <p v-if="successMsg">{{ successMsg }}</p>   
    </div>
</template>

<script>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const errMsg = ref('');
    const successMsg = ref(''); // New ref for success message

    const login = () => {
      signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        successMsg.value = "Successfully logged in!"; // Update success message
        console.log(data.user);
      })
      .catch((error) => {
        errMsg.value = error.message;
        console.log(error.code);
      });
    }

    return {
      email,
      password,
      errMsg,
      successMsg,
      login
    }
  }
}
</script>

<style>
.login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* takes up the full viewport height */
    margin: 0 auto; /* centers the container horizontally */
}

h1 {
    margin-bottom: 1rem;
}

form {
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
  font-weight: bold;
  margin-bottom: 0.5rem; /* space between the label and the input field */
}


input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>