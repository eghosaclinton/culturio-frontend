'use client'
import { Link } from 'next-view-transitions'
import { motion } from 'motion/react'
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
            <motion.div
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                style={{ fontSize: fontSize }}
                // transition={{ delay: 0.1, duration: 0.5 }}
                className="p-3 cursor-pointer w-full max-w-[768px]"
            >
                <div className="bg-white exhibit-img rounded-lg shadow-lg overflow-hidden">
                    <Image
                        src={media_url}
                        alt={title}
                        className="w-full h-auto object-cover"
                        width={100}
                        height={100}
                    />
                </div>
            </motion.div>
        </Link>
    )
}
