import Image from 'next/image'

export default function Header() {
    return (
        <header className="p-4 shadow-md">
            <h2 className="flex gap-2 items-center justify-center font-semibold text-xl">
                <Image
                    alt="culturio logo"
                    src="/culturio.svg"
                    width={30}
                    height={30}
                />
                culturio
            </h2>
        </header>
    )
}
