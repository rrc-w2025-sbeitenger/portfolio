import Window from "../../common/window";

function About({onClose}: { onClose: () => void}) {
    return (
        <Window title="about" onClose={onClose}>
            <div className="w-[90vw] max-w-[800px] h-[420px] sm:h-[558px] overflow-y-auto">
                <header className="sticky top-0 z-10 flex flex-col items-center gap-5 border-b border-purple-100 bg-purple-50 px-6 py-6 text-center sm:flex-row sm:gap-6 sm:px-8 sm:text-left">
                    <img
                        className="size-24 shrink-0 rounded-full object-cover ring-4 ring-white sm:size-32 hover:scale-120 transition-all"
                        src="/about/sven_picture1.png"
                        alt="Sven"
                    />
                    <div>
                        <h1 className="font-troika text-3xl text-zinc-800 sm:text-4xl">Sven</h1>
                        <p className="mt-2 text-base leading-relaxed text-purple-700 sm:text-lg">
                            Developer, Video Editor, and Graphic Designer
                        </p>
                    </div>
                </header>

                <div className="space-y-8 px-6 py-8 text-zinc-700 sm:px-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-purple-700 sm:text-3xl">About me</h2>
                        <p className="text-base leading-relaxed sm:text-lg">
                            Hello, I'm Sven! I'm a developer, 3D printing hobbyist, and so much more!
                        </p>
                        <p className="text-base leading-relaxed sm:text-lg">
                            I'm currently studying Application Development and Delivery at
                            Red River College Polytechnic and looking forward for a software development
                            co-op opportunity. I have hands-on experience building REST APIs,
                            interactive web applications, and Python desktop applications!
                        </p>
                    </section>

                    <section className="space-y-4 border-t border-purple-100 pt-6">
                        <h2 className="text-2xl font-bold text-purple-700 sm:text-3xl">Education</h2>
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold sm:text-xl">Red River College Polytechnic</h3>
                            <p className="text-base leading-relaxed sm:text-lg">Major: Application Development and Delivery</p>
                            <p className="text-sm text-zinc-500">Currently studying</p>
                        </div>
                    </section>

                    <section className="space-y-4 border-t border-purple-100 pt-6">
                        <h2 className="text-2xl font-bold text-purple-700 sm:text-3xl">Hobbies</h2>
                        <ul className="flex flex-wrap gap-3">
                            <li className="bg-purple-50 px-4 py-2 text-purple-700 shadow-md">3D printing</li>
                            <li className="bg-purple-50 px-4 py-2 text-purple-700 shadow-md">Hiking</li>
                            <li className="bg-purple-50 px-4 py-2 text-purple-700 shadow-md">Star Wars</li>
                            <li className="bg-purple-50 px-4 py-2 text-purple-700 shadow-md">Destiny</li>
                            <li className="bg-purple-50 px-4 py-2 text-purple-700 shadow-md">Modding consoles</li>
                        </ul>
                    </section>
                </div>
            </div>
        </Window>
    );
}

export default About;
