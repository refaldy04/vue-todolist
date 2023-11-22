import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  useRouter,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import TodolistVue from "../views/TodolistView.vue";
import LoginView from "../views/LoginView.vue";
import CrudView from "../views/CRUD/CrudView.vue";
import FormCrudVue from "@/views/CRUD/FormCrud.vue";

const authGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (token) {
    next();
  } else {
    router.push("/login");
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/todolist",
      name: "todolist",
      component: TodolistVue,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/",
      name: "crud",
      component: CrudView,
      beforeEnter: authGuard,
    },
    {
      path: "/crud/:id",
      name: "crud edit",
      component: FormCrudVue,
      beforeEnter: authGuard,
    },
  ],
});

export default router;
