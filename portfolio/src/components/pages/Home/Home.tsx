import Window from "../../common/window";

function Home(){
    return(
        <div className="bg-taupe-300 min-h-screen">
            <Window title="home">
                
                    <div className="text-center">
                        <h1 className="font-troika text-7xl font-bold text-rose-600 mt-30">Hello!
                            <span className="text-teal-500"> I'm Sven! </span>
                        </h1>

                        <p className="text-lg mt-4">Test!</p>
                    </div>
                
            </Window>
        </div>
    );
}

export default Home;