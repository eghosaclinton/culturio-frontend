import Image from "next/image";

export default function Footer (){
    return (
        <footer className="p-4 w-full absolute bottom-0 flex items-center justify-center gap-2">
            Made in <span><Image alt="naija flag" src="/naija.svg" width={25} height={25}/></span> by a1s0sa
        </footer>
    );
}