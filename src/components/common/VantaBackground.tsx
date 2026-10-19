import { useEffect, useRef } from "react";
import * as THREE from "three";
import birdsModule from "vanta/dist/vanta.birds.min";

// Vite can wrap Vanta's function inside a default property.
const BIRDS = typeof birdsModule === "function" ? birdsModule : birdsModule.default;

function VantaBackground() {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!backgroundRef.current) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        try {
            const effect = BIRDS({
                el: backgroundRef.current,
                THREE,
                backgroundColor: 0xf5f3ff,
                color1: 0xa94ecf,
                color2: 0x5353bb,
                quantity: 3,
            });

            return () => effect.destroy();
        } catch (error) {
            console.warn("Vanta could not start; keeping the plain background.", error);
        }
    }, []);

    return (
        <div
            ref={backgroundRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 bg-purple-50"
        />
    );
}

export default VantaBackground;
