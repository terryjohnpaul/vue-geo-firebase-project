<template>
    <div class="login container">
        <form @submit.prevent="loogin" class="card-panel">
            <h2 class="center red-text">Login</h2>
            <div class="field">
                <label for="email">email</label>  
                <input name="email" type="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password</label>
                <input name="password" type="password" v-model="password">
            </div>
            <p v-if="feedback" class="red-text center">{{feedback}}</p>
            <br>
            <div class="field center">
                <button class="red btn-floating btn-large pulse">
                    <i class="material-icons">forward</i>
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    loogin() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            console.log(cred.user);
            this.$router.push({ name: "googlemap" });
          })
          .catch(err => {
            this.feedback = err.message;
          });
        this.feedback = null;
      } else {
        this.feedback = "Please fill all the required fields..";
      }
    }
  }
};
</script>
<style>
.login {
  max-width: 500px;
  margin-top: 60px;
}
.login .h2 {
  font-size: 2.4em;
}
.login .field {
  margin-bottom: 16px;
}
.card-panel {
  background: blue lighten-3;
}
</style>
