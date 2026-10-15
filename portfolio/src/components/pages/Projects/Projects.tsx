import Window from "../../common/window";

function Projects({onClose}: { onClose: () => void}) {
    const languages = ['TypeScript', 'JavaScript', 'Python', 'HTML/CSS', 'Tailwind CSS', 'SQL']
    const mainTechs = ['Git', 'GitHub', 'Postman', 'Pandas', 'AWS', 'Docker', 'Render', 'React', 'Linux',
                        'Windows', 'Firebase', 'Tailwind CSS', 'Oracle VirtualBox', 'Node.js', 'Express.js', 'Figma', 'Vercel',
                        'MongoDB', 'Kubernetes']
    const marathonTechs = ['TypeScript', 'Node.js', 'Express.js', 'Firebase', 'Firestore', 'Render']
    const bankingTechs = ['Python', 'PySide6', 'Object-Oriented Programming', 'Design Patterns']
    const formulaOneTechs = ['React', 'TypeScript', 'CSS', 'HTML', 'Vite']
    const profolioTechs = ['React', 'TypeScript', 'Tailwind CSS', 'React-rnd']

    return (
        <Window title="projects" onClose={onClose}>
            <section className="w-[90vw] max-w-[960px] h-[500px] sm:h-[558px] overflow-y-auto space-y-8 px-6 py-8 text-zinc-700 sm:px-8">
                <section className="space-y-4">
                    <h3 className="border-b border-purple-100 pb-2 text-xl font-bold text-purple-700">Technical Skills</h3>
                    <div className="space-y-3">
                        <h4 className="font-semibold">Languages</h4>
                        <ul className="flex flex-wrap gap-3">
                            {languages.map((language) => (
                                <li className="bg-purple-50 px-4 py-2 text-purple-700 shadow-md hover:scale-90 transition-all">{language}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold">Technologies / Frameworks</h4>
                        <ul className="flex flex-wrap gap-3">
                            {mainTechs.map((tech) => (
                                <li className="bg-purple-50 px-4 py-2 text-purple-700 shadow-md hover:scale-90 transition-all">{tech}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-100 pb-3">
                        <h3 className="text-xl font-bold text-purple-700">Development</h3>
                        <a
                            href="https://github.com/rrc-w2025-sbeitenger"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-purple-700 px-4 py-2 font-semibold text-white shadow-md hover:bg-purple-800 hover:scale-90 transition-all"
                        >
                            View my GitHub
                        </a>
                    </div>

                    <article className="flex flex-col gap-5 border border-purple-100 bg-white p-5 shadow-md sm:flex-row">
                        <img className="size-24 shrink-0 object-contain" src="/projects/marathon_logo.png" alt="Marathon API logo" loading="lazy" />
                        <div className="min-w-0 space-y-3">
                            <h4 className="text-xl font-bold text-purple-700">
                                <a
                                    href="https://github.com/rrc-w2025-sbeitenger/marathon_rest_api"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline focus-visible:outline-2 focus-visible:outline-purple-700"
                                >
                                    Marathon Rest API
                                </a>
                            </h4>
                            <p className="leading-relaxed">
                                Independently built and deployed a RESTful API featuring 19 endpoints,
                                Firebase Authentication, and Cloud Firestore integration.
                            </p>
                            <ul aria-label="Marathon API" className="flex flex-wrap gap-2 text-sm">
                                {marathonTechs.map((tech) => (
                                    <li className="bg-purple-50 px-3 py-2 text-purple-700 shadow-md hover:scale-90 transition-all">{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </article>

                    <article className="flex flex-col gap-5 border border-purple-100 bg-white p-5 shadow-md sm:flex-row">
                        <img className="size-24 shrink-0 object-contain" src="/projects/banking_logo.png" alt="Banking Management App logo" loading="lazy" />
                        <div className="min-w-0 space-y-3">
                            <h4 className="text-xl font-bold text-purple-700">
                                <a
                                    href="https://github.com/rrc-w2025-sbeitenger/Banking_Management_Application"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline focus-visible:outline-2 focus-visible:outline-purple-700"
                                >
                                    Banking Managment App
                                </a>
                            </h4>
                            <p className="leading-relaxed">
                                Developed a Python desktop application for managing bank accounts,
                                applying object-oriented programming principles and software design patterns.
                            </p>
                            <ul aria-label="Banking Management App" className="flex flex-wrap gap-2 text-sm">
                                {bankingTechs.map((tech) => (
                                    <li className="bg-purple-50 px-3 py-2 text-purple-700 shadow-md hover:scale-90 transition-all">{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </article>

                    <article className="flex flex-col gap-5 border border-purple-100 bg-white p-5 shadow-md sm:flex-row">
                        <img className="size-24 shrink-0 object-contain" src="/projects/f1_logo.png" alt="Formula One Web App logo" loading="lazy" />
                        <div className="min-w-0 space-y-3">
                            <h4 className="text-xl font-bold text-purple-700">
                                <a
                                    href="https://github.com/AldwinCunanan/full-stack-sprint-group-7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline focus-visible:outline-2 focus-visible:outline-purple-700"
                                >
                                    Formula One Web App (WIP)
                                </a>
                            </h4>
                            <p className="leading-relaxed">
                                Collaborating on an React application, developing race
                                management features using TypeScript and reusable components.
                            </p>
                            <ul aria-label="Formula One Web App" className="flex flex-wrap gap-2 text-sm">
                                {formulaOneTechs.map((tech) => (
                                    <li className="bg-purple-50 px-3 py-2 text-purple-700 shadow-md hover:scale-90 transition-all">{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </article>

                    <article className="flex flex-col gap-5 border border-purple-100 bg-white p-5 shadow-md sm:flex-row">
                        <div aria-hidden="true" className="flex size-24 shrink-0 items-center justify-center bg-purple-50 font-mono text-3xl font-bold text-purple-700">&lt;/&gt;</div>
                        <div className="min-w-0 space-y-3">
                            <h4 className="text-xl font-bold text-purple-700">
                                <a
                                    href="https://github.com/rrc-w2025-sbeitenger/portfolio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline focus-visible:outline-2 focus-visible:outline-purple-700"
                                >
                                    This Portfolio Website (WIP)
                                </a>
                            </h4>
                            <p className="leading-relaxed">
                                Building a personal portfolio with a desktop-inspired interface,
                                draggable windows, and responsive layouts, because I thought it would be interesting!
                            </p>
                            <ul aria-label="Portfolio website" className="flex flex-wrap gap-2 text-sm">
                                {profolioTechs.map((tech) => (
                                    <li className="bg-purple-50 px-3 py-2 text-purple-700 shadow-md hover:scale-90 transition-all">{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                </section>

                <section className="space-y-5">
                    <h3 className="border-b border-purple-100 pb-2 text-xl font-bold text-purple-700">Experiences</h3>
                    <article className="overflow-hidden border border-purple-100 bg-white shadow-md">
                        <img
                            className="h-auto w-full"
                            src="/projects/sprint.jpg"
                            alt="Group photo at Sprint to Innovate with the security solution presentation in the background"
                            loading="lazy"
                        />
                        <div className="space-y-4 p-5">
                            <h4 className="text-xl font-bold text-purple-700">
                                <a
                                    href="https://www.linkedin.com/posts/popp3r_innovation-cybersecurity-academiccollaboration-activity-7292198125132300288-GNqd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline focus-visible:outline-2 focus-visible:outline-purple-700"
                                >
                                    Sprint to Innovate
                                </a>
                            </h4>
                            <p className="leading-relaxed">
                                At Sprint to Innovate, I worked with a team to come up with an
                                AI-driven security solution that would help people without a
                                technical background better understand security issues. We brought
                                our ideas together and presented our concept to company representatives,
                                focusing on how it could make security information clearer and more approachable.
                            </p>
                            <p className="leading-relaxed">
                                Teamwork was at the heart of the experience! Giving ideas and improving on them with feedback,
                                and then building a proposal and communicating it in a way our audience could
                                understand. Our team earned first place in the company's selection
                                and second place overall in the competition!
                            </p>
                            <ul aria-label="Sprint to Innovate achievements" className="flex flex-wrap gap-3 text-sm">
                                <li className="bg-purple-50 px-4 py-2 text-purple-700 shadow-md hover:scale-90 transition-all">1st place — Company selection</li>
                                <li className="bg-purple-50 px-4 py-2 text-purple-700 shadow-md hover:scale-90 transition-all">2nd place — Overall competition</li>
                            </ul>
                        </div>
                    </article>
                </section>
            </section>
        </Window>
    );
}

export default Projects;
