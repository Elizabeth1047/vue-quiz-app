import { createRouter, createWebHistory } from "vue-router";
import QuizView from "../views/QuizView.vue";
import QuizeView from "../views/QuizeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quiz",
      component: QuizView,
    },
    {
      path: "/quiz/:id",
      name: "quize",
      component: QuizeView,
    },
    //{
    // path: "/about",
    // name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //  component: () => import("../views/AboutView.vue"),
    //  },
  ],
});

export default router;
