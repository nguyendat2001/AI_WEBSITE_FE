import { createWebHistory, createRouter } from "vue-router";
import { userAccStore } from "@/Store/user.store";

const routes = [
    
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/auths/login.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/auths/register.vue"),
    },
    {
        path: "/home",
        component: () => import("@/views/pages/home.vue"),
        children: [
            // {
            //     path: "/admin/product/:id",
            //     name: "admin.product.edit",
            //     component: () => import("@/views/Admin/components/editProduct.vue"),
            //     props: true
            // },
            // {
            //     path: "/admin/user",
            //     name: "admin.user",
            //     component: () => import("@/views/Admin/components/user.vue"),
            // },
        ],
    },

    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "notfound",
    //     component: () => import("@/views/NotFound.vue"),
    // },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
  
router.beforeEach((to, from, next) => {
    const userStore = userAccStore();
    let value = localStorage.user;
    if (!userStore.user && to.name != "login" && to.name != "register") {
      next({
        path: "/login",
        replace: true,
      });
    }
    next();
});

export default router;