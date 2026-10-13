import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";

export type Page = "about" | "projects" | "contact";

type ActivePageProps = {
    activePage: Page | null;
    onClose: () => void;
};

function ActivePage({ activePage, onClose }: ActivePageProps) {
    //render nothing when no page is selected.
    if (activePage === null) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-20 flex items-center justify-center p-4">
            <div className="w-full max-w-[800px]">
                {activePage === "about" && <About onClose={onClose}/>}
                {activePage === "projects" && <Projects onClose={onClose}/>}
                {activePage === "contact" && <Contact onClose={onClose}/>}
            </div>
        </div>
    );
}

export default ActivePage;
