import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  PostsView,
  DetailsView,
  // LoginView,
  ContactView,
  SignUpFormView,
  LoginFormView,
  ServicesView,
  AboutUsView,
  TeamView,
  ProjectsView,
  TrainingView,
  NotFoundView,
} from "../views";
// import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomeView },
  // { path: "/login", name: "login", component: LoginView },
  { path: "/posts", name: "posts", component: PostsView },
  { path: "/aboutus", name: "About-us", component: AboutUsView },
  { path: "/contact", name: "contact", component: ContactView },
  { path: "/Signup", name: "Signup", component: SignUpFormView },
  { path: "/Login", name: "Login", component: LoginFormView },
  { path: "/:PathMatch(.*)*", name: "Errorpage", component: NotFoundView },
  { path: "/projects", name: "Our-projects", component: ProjectsView },
  { path: "/services", name: "services", component: ServicesView },
  { path: "/team", name: "Our-Team", component: TeamView },
  { path: "/training", name: "Training", component: TrainingView },
  { path: "/posts/:id", name: "details", component: DetailsView, props: true },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0}
    }
  }
 });

export default router;
