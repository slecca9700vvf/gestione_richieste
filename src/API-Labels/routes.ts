import { IRoute } from "../Interfaces/IRoute";

const routes:Array<IRoute> = [
    {
        path: "/",
        name: "Home Page",
        icon: "homepage",
        component: null,
        layout: "/"
    },
    {
        path: "/user/login",
        name: "",
        icon: "login",
        component: null,
        layout: "user"
    },
    {
        path: "/user/logout",
        name: "",
        icon: "logout",
        component: null,
        layout: "user"
    }
]

export default routes;