const routes = [
    {path:'/', redirect: '/home' },
    { path: '/home', name: 'home', component: ()=> import("@/pages/Home.vue")},
    { path: '/parent', name: 'parent', component: ()=> import("@/pages/Parent.vue")},
]

export default routes;