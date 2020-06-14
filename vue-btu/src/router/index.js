import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Break the Universe | Home",
      metaTags: [
        {
          name: "Break the Universe",
          content: "Music, videos, contact, merch"
        },
        {
          /*og:description is the facebook metatag*/
          property: "og:description",
          content: "Music, videos, contact, merch"
        }
      ]
    }
  },
  {
    path: "/enter",
    name: "Enter",
    // route level code-splitting
    // this generates a separate chunk (enter.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "enter" */ "../views/Enter.vue"),
    meta: {
      title: "Break the Universe | Enter",
      metaTags: [
        {
          name: "Break the Universe",
          content: "Music, videos, contact, merch"
        },
        {
          /*og:description is the facebook metatag*/
          property: "og:description",
          content: "Music, videos, contact, merch"
        }
      ]
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
