import { Outlet } from "react-router";
import VantaBackground from "../VantaBackground";
import { Howl } from "howler";

function Layout(){
    const soundPressed: Howl = new Howl({
        src: ["/sounds/03_button_click.mp3"],
        volume: 0.2,
        html5: true,
        preload: true
    });

    return(
        <main 
            className="relative isolate"
            onPointerDownCapture={() => soundPressed.play()}
        >
            <VantaBackground />
            <div className="relative z-10">
                <Outlet />
            </div>
        </main>
    );
};

export default Layout;
