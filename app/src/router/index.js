import { createRouter, createWebHistory } from "vue-router";
import { HomeView, PostsView, DetailsView, LoginView,} from "../views";
import { useAuthStore } from "../store";
import ContactView from "../views/ContactView.vue";
import SignUpFormView from "../views/SignUpFormView.vue";
import LoginFormView from "../views/LoginFormView.vue";
import ServicesView from "../views/servicesView.vue";
import AboutUsView from "../views/AboutUsView.vue";
import TeamView from "../views/TeamView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import TrainingView from "../views/TrainingView.vue";


const routes = [
  { path: "/", name: "home", component: HomeView },
  // { path: "/login", name: "login", component: LoginView },
  { path: "/posts", name: "posts", component: PostsView },
  { path: "/aboutus", name: "About-us", component: AboutUsView },
  { path: "/contact", name: "contact", component: ContactView },
  { path: "/Signup", name: "Signup", component: SignUpFormView },
  { path: "/Login", name: "Login", component: LoginFormView },
  { path: "/projects", name: "Our-projects", component: ProjectsView },
  { path: "/services", name: "services", component: ServicesView },
  { path: "/team", name: "Our-Team", component: TeamView },
  { path: "/training", name: "Training", component: TrainingView },
  { path: "/posts/:id", name: "details", component: DetailsView, props: true },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

// router.beforeEach(async (to) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ["/login"];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();

//   /**add function to check if user is logged in */

//   if (authRequired && !auth.user) {
//     auth.returnUrl = to.fullPath;
//     return "/login";
//   }
// });

export default router;

