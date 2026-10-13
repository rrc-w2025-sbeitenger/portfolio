import Window from "../../common/window";

function About({onClose}: { onClose: () => void}) {
    return (
        <Window title="about" onClose={onClose}>
            <section className="space-y-4 text-zinc-700">
                <h2 className="text-3xl font-bold text-teal-600">About me</h2>
                <p>Hi, I'm Sven! I'm a developer, video editor, and graphic designer.</p>
            </section>
        </Window>
    );
}

export default About;
