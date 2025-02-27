'use client'
import { useState } from 'react'
// import Overlay from './Overlay'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Content } from '@/app/utils/types'
import clsx from 'clsx'
import { useColumn } from '@/app/hooks/useColumn'

export default function MasonryCard({
    data: { title, media_url, source, description },
}: {
    data: Content
}) {
    const [isClicked, setIsClicked] = useState(false)
    const { fontSize } = useColumn()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: isClicked ? 1.1 : 1 }}
            onClick={() => {
                setIsClicked(!isClicked)
            }}
            style={{ fontSize: fontSize }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className={clsx('p-3 cursor-pointer w-full max-w-[768px]')}
        >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                    src={media_url}
                    alt={title}
                    className={clsx(
                        'w-full h-auto object-cover',
                        isClicked && 'gallery__image'
                    )}
                    width={100}
                    height={100}
                />
                {isClicked && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-4"
                    >
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
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}
