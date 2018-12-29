<template>
    <div class="signup container">
        <form @submit.prevent="sign" class="card-panel">
         
            <h2 class="center red-text ">
              <i class="material-icons">assignment_ind </i>&nbsp;SignUp</h2>
            <div class="field">
                <label for="email">email</label>  
                <input name="email" type="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password</label>
                <input name="password" type="password" v-model="password">
            </div>
            <div class="field">
                <label for="alias">username</label>
                <input name="alias" type="text" v-model="alias">
            </div>
            <p class="red-text center" v-if="feedback">{{feedback}}</p>
            <div class="field center">
                <button class="red btn-floating btn-large pulse">
                    <i class="material-icons">done_outline</i>
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import slugify from "slugify";
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "signup",
  data() {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    sign() {
      if (this.alias && this.email && this.password) {
        this.slug = slugify(this.alias, {
          replacement: "-",
          remove: /[$:*_+~.()'"!\-:@]/g,
          lower: true
        });
        let ref = db.collection("users").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "Sorry man..this username already exsist";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  alias: this.alias,
                  geolocation: null,
                  user_id: cred.user.uid
                });
              })
              .then(() => {
                this.$router.push({ name: "googlemap" });
              })
              .catch(err => {
                console.log(err);
                this.feedback = err.message;
              });
            this.feedback = "The username is available..!";
          }
        });
      } else {
        this.feedback = "You need to enter all fields....";
      }
    }
  }
};
</script>
<style>
.signup {
  max-width: 500px;
  margin-top: 60px;
}
.signup h2 {
  font-size: 2.4em;
}
.signup field {
  margin-bottom: 16px;
}
</style>
