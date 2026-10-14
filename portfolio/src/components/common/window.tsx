import { Rnd } from 'react-rnd';
import type { ReactNode } from "react";

type WindowProps = {
    title: string;
    children: ReactNode;
    onClose?: () => void;
    draggable?: boolean;
};

function Window({title, children, onClose, draggable=true}: WindowProps){

    const content = (
            <div className="overflow-hidden rounded-xl border border-zinc-400 bg-white shadow-[0_5px_0_rgba(0,0,0,0.15)]">
                <div className="window-header flex h-13 items-center border-b border-zinc-400 bg-zinc-800 px-6 text-xl text-stone-200">
                    {title}
                    {onClose && (
                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute font-mono flex items-center justify-center text-white text-xl right-0 mr-6 duration-100 hover:scale-110 active:scale-80 z-10 hover:text-red-500"
                        >
                            [x]
                        </button>
                    )}
                </div>
                {children}
            </div>
    )

    if (!draggable){
        return(
            <div className="mx-auto h-full w-full max-w-[800px]">
                {content}
            </div>
        )
    }

    return (
        <Rnd
            default={{
                x: 0,
                y: -200,
                width: "auto",
                height: "auto"
            }}
            maxWidth={960}
            bounds="window"
            dragHandleClassName="window-header"
            cancel=".no-drag"
            enableResizing={false}
        >
            {content}
        </Rnd>
    );
}

export default Window;
