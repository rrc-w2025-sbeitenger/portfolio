import Window from "../../common/window";
import Nav from "../../common/Nav"
import Footer from "../../common/Footer";
import ActivePage from "../../common/activePage";
import type { Page } from "../../common/activePage";
import { useState } from "react";

function Home(){
    const [activePage, setActivePage] = useState<Page | null>(null);

     return(
        <div className="flex min-h-svh items-center justify-center bg-taupe-300 px-4 py-12 sm:px-8 sm:py-20">
            <Window
            title="home"
            draggable={false}
            >
                
                    <div className="flex min-h-[420px] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[558px] sm:px-10 sm:py-24">
                        <h1 className="font-troika text-5xl leading-tight font-bold text-zinc-800 sm:text-7xl lg:text-[80px]">Hello!
                            <span className="text-teal-500"> I'm Sven! </span>
                        </h1>

                        <p className="mt-4 text-lg leading-relaxed text-zinc-600 sm:text-2xl">Developer, Video Editor, and Graphic Desginer</p>

                        <div className="mt-12 w-full sm:mt-20">
                            <Nav 
                                onAboutClick={() => setActivePage('about')}
                                onProjectsClick={() => setActivePage('projects')}
                                onContactClick={() => setActivePage('contact')}
                            />
                        </div>
                    </div>
            </Window>

            <Footer/>
            
            <ActivePage
                activePage={activePage}
                onClose={() => setActivePage(null)}
            />
            
        </div>
    );
}

export default Home;
