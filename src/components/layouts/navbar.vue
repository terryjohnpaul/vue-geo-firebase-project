<template>
    <div class="navbar">
        <nav class="red darken-1">
            <div class="container">
                
                <router-link :to="{name: 'googlemap'}">Chat
                    
                    </router-link>
                <ul class="right">
                    <li v-if="!user"><router-link :to="{name: 'signup'}">Signup</router-link></li>
                    <li v-if="!user"><router-link :to="{name: 'login'}">Login</router-link></li>
                    <li v-if="user"><a>{{user.email}}</a></li>
                    <li v-if="user"><a @click="logout">logout</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: null
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>
<style>
.navbar {
  z-index: -1;
}
</style>

