import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function SpeakerSection() {
    return (
        <div className=" ocean-bg min-h-screen bg-gradient-to-b from-[#003f5c] via-[#046b8a] to-[#05a2c2] text-white">
            
            <h1 className="text-center font-extrabold text-4xl lg:text-5xl pt-24 pb-4 text-[#a9e8ff] drop-shadow-lg tracking-wide">
                SPEAKERS
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-10 lg:px-20 mt-10">

                <a href="https://www.linkedin.com/in/panisap/" target="_blank" rel="noopener noreferrer">
                    <Card className="max-w-sm mx-auto shadow-lg h-full flex flex-col bg-white/10 backdrop-blur-sm rounded-xl 
                        transition-transform hover:scale-105 hover:shadow-2xl hover:bg-white/20 border border-white/10 hover:border-[#a9e8ff] duration-300">
                        <CardContent className="p-6 flex flex-col justify-center h-full">
                            <div className="flex justify-center">
                                <Image src="/speakers/saptarshiPani.png" className="rounded-full" width={150} height={150} alt="Saptarshi Pani" />
                            </div>
                            <h2 className="text-center mt-4 text-2xl font-bold text-[#d9faff]">Saptarshi Pani</h2>
                            <p className="mt-2 text-[#e7faff] text-md overflow-hidden text-ellipsis">
                                Jadavpur University Alumnus from the Department of Electrical Engineering, Forbes and ET unstoppable Leader, Working professional at Texas Instruments, part-time professional at co-founded startup Alchemyst AI.
                            </p>
                        </CardContent>
                    </Card>
                </a>

                <a href="https://www.linkedin.com/in/sapghosh/" target="_blank" rel="noopener noreferrer">
                    <Card className="max-w-sm mx-auto shadow-lg h-full flex flex-col bg-white/10 backdrop-blur-sm rounded-xl 
                        transition-transform hover:scale-105 hover:shadow-2xl hover:bg-white/20 border border-white/10 hover:border-[#a9e8ff] duration-300">
                        <CardContent className="p-6 flex flex-col justify-center h-full">
                            <div className="flex justify-center">
                                <Image src="/speakers/saptarshiGhosh.png" className="rounded-full" width={150} height={150} alt="Saptarshi Ghosh" />
                            </div>
                            <h2 className="text-center mt-4 text-2xl font-bold text-[#d9faff]">Saptarshi Ghosh</h2>
                            <p className="mt-2 text-[#e7faff] text-md overflow-hidden text-ellipsis">
                                Jadavpur University Alumnus from Department of Instrumentation and Electronic Engineering, Ex UC Berkeley, Professional in ASIC at Intel Corporation, President of Global Students and Young Professionals at IEEE Computer Society.
                            </p>
                        </CardContent>
                    </Card>
                </a>

                <a href="https://jadavpuruniversity.in/" target="_blank" rel="noopener noreferrer">
                    <Card className="max-w-sm mx-auto shadow-lg h-full flex flex-col bg-white/10 backdrop-blur-sm rounded-xl 
                        transition-transform hover:scale-105 hover:shadow-2xl hover:bg-white/20 border border-white/10 hover:border-[#a9e8ff] duration-300">
                        <CardContent className="p-6 flex flex-col justify-center h-full">
                            <div className="flex justify-center">
                                <Image src="/speakers/vc.png" className="rounded-full" width={150} height={150} alt="Dr. Bhaskar Gupta" />
                            </div>
                            <h2 className="text-center mt-4 text-2xl font-bold text-[#d9faff]">Dr. Bhaskar Gupta</h2>
                            <p className="mt-2 text-[#e7faff] text-md overflow-hidden text-ellipsis">
                                Jadavpur University Alumnus from Department of Electronics and Telecommunication, Former Senior Professor at Department of ETCE, and current Honourable Vice-Chancellor of Jadavpur University.
                            </p>
                        </CardContent>
                    </Card>
                </a>

            </div>
        </div>
    );
}
