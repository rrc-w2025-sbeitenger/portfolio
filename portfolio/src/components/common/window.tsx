import type { ReactNode } from "react";

type WindowProps = {
    title: string;
    children: ReactNode;
    onClose?: () => void 
};

function Window({title, children, onClose}: WindowProps){
    return(
        <div className="w-full max-w-[800px]">
            <div className="overflow-hidden rounded-xl border border-zinc-400 bg-white shadow-[0_5px_0_rgba(0,0,0,0.15)]">
                <div className="flex h-13 items-center border-b border-zinc-400 bg-zinc-800 px-6 text-xl text-stone-200">
                    {title}
                    {onClose && (
                        <button
                            type="button"
                            onClick={onClose}
                            className="ml-auto flex size-9 cursor-pointer items-center justify-center rounded-full hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-white"
                        >
                            [x]
                        </button>
                    )}
                </div>
                {children}
            </div>
        </div>
    );
}

export default Window;
