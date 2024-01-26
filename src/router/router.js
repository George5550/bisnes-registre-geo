import Home from '../views/HomeView.vue';
import Search from '../views/SearchView.vue';

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/search",
        name: "Search",
        component: Search
    },
    // {
    //     path: "/report",
    //     name: "Report",
    //     component: Report
    // },

    // {
    //     path: "/tax",
    //     name: "tax",
    //     component: tax
    // },

    // {
    //     path: "/report2",
    //     name: "Report2",
    //     component: Report2
    // },
]

export default routes