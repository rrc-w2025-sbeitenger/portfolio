import Window from "../../common/window";

function Contact({onClose}: { onClose: () => void}) {
    return (
        <Window title="contact" onClose={onClose}>
            <section className="w-[90vw] max-w-[500px] space-y-4 px-6 py-8 text-zinc-700">
                <h2 className="text-3xl font-bold text-purple-700">Contact</h2>
                <section className="space-y-3 border-t border-purple-100 pt-4">
                    <h3 className="text-xl font-semibold text-purple-700">Email me at: svenbeit7@gmail.com</h3>
                    <p className="leading-relaxed">
                        Have a question, a project idea, or a co-op opportunity? Feel free to
                        email me. I'd love to hear from you!
                    </p>
                </section>
            </section>
        </Window>
    );
}

export default Contact;
