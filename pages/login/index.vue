<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
     <div>
       <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
         Back Office Login
       </h2>
     </div>
     <form class="mt-8 space-y-6" @submit.prevent="login">
       <input type="hidden" name="remember" value="true">
       <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Username</label>
            <input id="username" name="username" type="text" autocomplete="username" required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username" v-model="username">
           </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Password" v-model="password">
          </div>
        </div>

        <div>
          <button type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
3
<script setup>
import { ref } from 'vue';
import {useAuthToken} from "~/composables/auth.js";

const username = ref('');
const password = ref('');

const login = async () => {
  console.log('Attempting login with:', username.value, password.value);
  try {
    const response = await $fetch('/auth/login', {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value,
      },
    });
    console.log('Login successful:', response);
    // TODO: Handle successful login (e.g., redirect to dashboard, store token)
  } catch (error) {
    console.error('Login failed:', error);
    // TODO: Handle login error (e.g., display error message)
  }
};
</script>

<style scoped>
/* Add any component specific styles here */
</style>
