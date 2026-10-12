import type { ReactNode } from "react";

type WindowProps = {
    title: string;
    children: ReactNode;
};

function Window({title, children}: WindowProps){
    return(
        <div className="flex justify-center">
            <div className="w-full max-w-3xl overflow-hidden rounded-xl border fixed bottom-50">
                <div className="border-b bg-zinc-800 border-zinc-600 px-6 py-3 text-stone-200">{title}</div>
                {children}
            </div>
        </div>
    );
}

export default Window;