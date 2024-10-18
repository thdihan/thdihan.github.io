import { FiGithub } from "react-icons/fi";
import "./App.css";
import img from "./assets/profile.png";
import { RiLinkedinFill } from "react-icons/ri";

function App() {
    return (
        <div className="">
            <header className="max-w-[1200px] mx-auto">
                <section className="flex justify-center py-16 items-center flex-col">
                    <div
                        className="animation-gradient-cycle rounded-full flex justify-center items-center size-[21rem]"
                        style={{
                            background:
                                "linear-gradient(145deg, #6366f1, #a855f7, #0ea5e9 30%, #10b981 60%, #ec4899)",
                            backgroundSize: "300% 300%",
                        }}
                    >
                        <div className="flex justify-center rounded-full w-[94%] bg-[#1C1F24] border-custom">
                            <img src={img} className="rounded-full" alt="" />
                        </div>
                    </div>

                    <div className="py-8 text-center">
                        <h1 className=" text-4xl md:text-5xl font-montserrat text-white font-bold">
                            Tanvir Hossain Dihan
                        </h1>
                        <p className="text-center py-8 text-3xl font-thin space-x-2 font-poppin">
                            <span className="text-[#c4cfde] ">I am a</span>
                            <span className="text-[#369CEB] font-light">
                                Full Stack Developer
                            </span>
                        </p>
                    </div>

                    <div className="text-center">
                        <button className="text-[#369CEB] bg-[#1C1F24] px-8 py-4 shadow-lg shadow-gray-700 rounded-md tracking-wide font-poppin transition-transform ease-in-out duration-500 hover:-translate-y-2 hover:scale-110">
                            VISIT PORTFOLIO
                        </button>
                    </div>
                </section>

                <section className="flex justify-center space-x-4 ">
                    <div className="text-white text-3xl bg-gradient-to-r from-[#1e2024] to-[#23272b]  p-4 shadow-gray-900 shadow-lg hover:bg-gradient-to-r hover:from-[#181B20] hover:to-[#181B20] cursor-pointer transition-all ease-in-out duration-500 rounded-lg">
                        <FiGithub />
                    </div>
                    <div className="text-white text-3xl bg-gradient-to-r from-[#1e2024] to-[#23272b]  p-4 shadow-gray-900 shadow-lg hover:bg-gradient-to-r hover:from-[#181B20] hover:to-[#181B20] cursor-pointer transition-all ease-in-out duration-500 rounded-lg">
                        <RiLinkedinFill />
                    </div>
                </section>
            </header>
        </div>
    );
}

export default App;
