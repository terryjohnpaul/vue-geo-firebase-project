import Vue from "vue";
import Router from "vue-router";
import googlemap from "@/components/home/googlemap";
import signup from "@/components/auth/signup";
import login from "@/components/auth/login";
import viewprofile from "@/components/profile/viewprofile";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "googlemap",
      component: googlemap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: signup
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/profile/:id",
      name: "viewprofile",
      component: viewprofile,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  //route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    //check auth state of user
    let user = firebase.auth().currentUser;
    if (user) {
      //when user signed in
      next();
    } else {
      //no user signed in
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
