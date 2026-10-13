import Window from "../../common/window";

function Contact({onClose}: { onClose: () => void}) {
    return (
        <Window title="contact" onClose={onClose}>
            <section className="space-y-4 text-zinc-700">
                <h2 className="text-3xl font-bold text-teal-600">Contact</h2>
                <p>My contact details will be added here soon.</p>
            </section>
        </Window>
    );
}

export default Contact;
