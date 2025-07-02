







const routes = [
// {
//   path: '/',
//   component: () => import('layouts/MainLayout.vue'),
//   children: [
//     { path: '', component: () => import('pages/IndexPage.vue') },
//     {path:'/ask',component: ()=>import('pages/AskQuestion.vue')},
//   ]
// },

{
path:'/',
component:()=>import('pages/IndexPage.vue'),
name:'index',
meta:{ requiresAuth: true }
},
{path:'/search',
component: ()=>import('src/pages/Search.vue'),
name:'search',
meta:{ requiresAuth: true }
},
{path:'/notes',
component: ()=>import('src/pages/NotesPage.vue'),
name:'notes',
meta:{ requiresAuth: true }
},
{path:'/ask',
component: ()=>import('src/pages/AskPage.vue'),
name:'ask',
meta:{ requiresAuth: true }
},
{path:'/library',
component: ()=>import('src/pages/LibraryPage.vue'),
name:'library',
meta:{ requiresAuth: true }
},
{path:'/menu',
component: ()=>import('src/pages/MenuPage.vue'),
name:'menu',
meta:{ requiresAuth: true }
},
{path:'/class',
component: ()=>import('src/pages/ClassPage.vue'),
name:'classes',
meta:{ requiresAuth: true }
},
{
path:'/class/show/:id',
component:()=>import('src/pages/ClassShowPage.vue'),
name:'show class',
meta:{ requiresAuth: true }
},
{
path:'/subject/show/:id',
component:()=>import('src/pages/SubjectShowPage.vue'),
name:'show subject',
meta:{ requiresAuth: true }
},
{
path:'/topic/show/:id',
component:()=>import('src/pages/TopicShowPage.vue'),
name:'show topic',
meta:{ requiresAuth: true }
},
{
path:'/login',
component:()=>import('src/pages/LoginPage.vue'),
name:'login',
meta:{ requiresAuth: true }
},
{
path:'/settings',
component:()=>import('src/pages/UserSettings.vue'),
name:'settings',
meta:{ requiresAuth: true }
},
{
  path:'/create-profile',
  component:()=>import('src/pages/CreateProfilePage.vue'),
  name:'create profile',
  meta:{ requiresAuth: true }
  },






// Always leave this as last one,
// but you can also remove it
{
path: '/:catchAll(.*)*',
component: () => import('pages/ErrorNotFound.vue')
}
];















export default routes
