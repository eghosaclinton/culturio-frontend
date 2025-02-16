import Image from "next/image";

export default function Fallback(){
    return (
        <div className="flex min-h-[80svh] items-center justify-center">
            <div className="loader flex-col flex items-center justify-center">
                <Image alt="Loading Fallback" src="/culturio.svg" width={50} height={50}/>   
            </div>   
        </div>
    );
}