import Window from "../../common/window";
function Projects({onClose}: { onClose: () => void}) {
    return (
        <Window title="projects" onClose={onClose}>
            <section className="space-y-4 text-zinc-700">
                <h2 className="text-3xl font-bold text-teal-600">Projects</h2>
                <p>My projects will be added here soon.</p>
            </section>
        </Window>
    );
}

export default Projects;
