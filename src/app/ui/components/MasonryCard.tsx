'use client'
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import { Content } from '@/app/utils/types'
import { useColumn } from '@/app/hooks/useColumn'

export default function MasonryCard({
    data: { id, title, media_url },
}: {
    data: Content
}) {
    const { fontSize } = useColumn()

    return (
        <Link href={`/exhibit/${id}`}>
            <div
                style={{ fontSize: fontSize }}
                className="cursor-pointer w-full max-w-[768px]"
            >
                <div
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    style={{
                        viewTransitionName: `image-${id}`,
                        contain: 'layout'
                    }}
                >
                    <Image
                        src={media_url}
                        alt={title}
                        className={`w-full h-auto object-cover`}
                        width={100}
                        height={100}
                        priority={Number(id) < 7}
                    />
                </div>
            </div>
        </Link>
    )
}
