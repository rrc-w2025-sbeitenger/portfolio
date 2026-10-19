type NavProps ={
    onAboutClick: () => void;
    onProjectsClick: () => void;
    onContactClick: ()=> void;
}

function Nav({onAboutClick, onProjectsClick, onContactClick}: NavProps) {
    return(
        <nav className="flex justify-center gap-4 sm:gap-8">
            <div onClick={onAboutClick} className="flex flex-col items-center gap-2">
                    <img className="size-30 cursor-pointer hover:scale-120 transition-all duration-300" src="/nav/information.svg" alt="information" />
                    <p className="text-2xl">about</p>
            </div>

            <div onClick={onProjectsClick} className="flex flex-col items-center gap-2">
                <img className="size-30 cursor-pointer hover:scale-120 transition-all duration-300" src="/nav/projects.svg" alt="projects" />
                <p className="text-2xl">projects</p>
            </div>
            
            <div onClick={onContactClick} className="flex flex-col items-center gap-2">
                <img className="size-30 cursor-pointer hover:scale-120 transition-all duration-300" src="/nav/contact.svg" alt="contact" />
                <p className="text-2xl">contact</p>
            </div>
                
        </nav>
    );
}

export default Nav;
