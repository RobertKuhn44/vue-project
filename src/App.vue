<template>
  <div>
    <h2>User Profile</h2>
    <button @click="login">Log in</button>
    <pre v-if="isAuthenticated">
        <code>{{ user }}</code>
      </pre>
  </div>
  <div>
    <button @click="logout">Log out</button>
  </div>
</template>

<script>
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        },
        logout: () => {
          logout({ localOnly: true });
        },
        user,
        isAuthenticated
      };
    }
  };
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
