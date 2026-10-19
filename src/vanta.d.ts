declare module "vanta/dist/vanta.birds.min" {
    type BirdsEffect = (options: Record<string, unknown>) => { destroy: () => void };
    const birdsModule: BirdsEffect | { default: BirdsEffect };
    export default birdsModule;
}
