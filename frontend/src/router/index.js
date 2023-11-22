import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import FirstPage from "../views/FirstPage.vue";
import CalculateBMI from "../views/CalculateBMI.vue";
import DiaryEntry from "../views/Diary.vue";
import HomePage from "../views/HomePage.vue";
import ProfileUser from "../views/Profile.vue";

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/",
    name: "firstpage",
    component: FirstPage,
  },
  {
    path: "/bmi",
    name: "bmi",
    component: CalculateBMI,
  },
  {
    path: "/diary",
    name: "diary",
    component: DiaryEntry,
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileUser,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
