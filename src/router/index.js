import { defineRouter } from '#q-app/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes';
import database from 'src/boot/database';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  });






Router.beforeEach(async(to,from,next)=>{
const { data: { session } } = await database.auth.getSession()
// console.log(session);
const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
const isPublic = ['/login'].includes(to.path)
if (requiresAuth && !session) {
if (to.path !== '/login') {
next('/login')   // redirect only if not already at /login
} else {
next() // already at login page, allow
}
} else if (session && isPublic) {
next('/') //redirect logged-in user away from login page
} else {
next() //proceed
}
});



















  return Router
})
