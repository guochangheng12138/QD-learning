import { createRouter, createWebHashHistory } from "vue-router";
import AddBlog from "../components/AddBlog.vue";
import ShowBlog from "../components/ShowBlog.vue";
import SingleBlog from "../components/SingleBlog.vue";

const routes = [
  {
    path: "/",
    name: "ShowBlog",
    component: ShowBlog,
  },
  {
    path: "/AddBlog",
    name: "AddBlog",
    component: AddBlog,
  },
  {
    path: "/SingleBlog/:id",
    name: "SingleBlog",
    component: SingleBlog,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
