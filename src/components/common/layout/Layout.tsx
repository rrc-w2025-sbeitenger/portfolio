import { Outlet } from "react-router"
import VantaBackground from "../VantaBackground"
//import nav
//import footer

function Layout(){
    return(
        <main className="relative isolate">
            <VantaBackground />
            <div className="relative z-10">
                <Outlet />
            </div>
        </main>
    )
}

export default Layout;
