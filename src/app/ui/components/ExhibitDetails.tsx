'use client'
import { Link } from 'next-view-transitions'
import clsx from 'clsx'
import { useParams } from 'next/navigation'
import { useColumn } from '@/app/hooks/useColumn'
import Image from 'next/image'
import { contentPlaceholder as content } from '@/app/utils/placeholder'

export default function ExhibitDetails() {
    const { id } = useParams<{ id: string }>()
    const {width} = useColumn()
    const { media_url, title, description, source } = content[parseInt(id) - 1]
    return (
        <div className="flex flex-col gap-2 image-detail max-w-[760px] mx-auto">
            <Link className="flex text-xl items-center  font-bold" href="/">
                <Image
                    alt="return"
                    src="/back-arrow.svg"
                    height={30}
                    width={30}
                />
                Back
            </Link>
            <div className={clsx("flex items-center gap-4", (width < 768) ? "flex-col" : "flex-row")}>
                <div
                    className="bg-white rounded-lg shadow-lg overflow-hidden w-[80%]"
                    style={{
                        viewTransitionName: `image-${id}`,
                        contain: 'layout'
                    }}
                >
                    <Image
                        src={media_url}
                        alt={title}
                        className={`image-${id} w-full h-auto object-cover`}
                        width={100}
                        height={100}
                        priority={true}
                    />
                </div>
                <div className="p-4">
                    <h3 className={`text-2xl font-bold mb-2`}>{title}</h3>
                    <p className="text-gray-600">{description}</p>
                    <a
                        href={source}
                        className="see items-cente w-fit font-semibold flex transition"
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
        </div>
    )
}
