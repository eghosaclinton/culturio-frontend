'use client'
import { Link } from 'next-view-transitions'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { contentPlaceholder as content } from '@/app/utils/placeholder'

export default function ExhibitDetails() {
    const { id } = useParams<{ id: string }>()
    const { media_url, title, description, source } = content[parseInt(id) - 1]
    return (
        <div className="image-detail max-w-[500px] mx-auto">
            <Link href="/">Back</Link>
            <div className="bg-white exhibit-img rounded-lg shadow-lg overflow-hidden">
                <Image
                    src={media_url}
                    alt={title}
                    className="w-full h-auto object-cover"
                    width={100}
                    height={100}
                />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <a
                    href={source}
                    className="see text-sm items-cente w-fit font-semibold flex transition"
                >
                    See more
                    <Image
                        alt="arrow"
                        src="/arrow.svg"
                        width={20}
                        height={20}
                    />
                </a>
            </div>
        </div>
    )
}
