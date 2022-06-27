const routes = [
    {path:'/', redirect: '/home' },
    { path: '/home', name: 'home', component: ()=> import("@/pages/Home.vue")},
]

export default routes;