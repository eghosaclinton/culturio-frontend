'use client'
// import { useState } from "react";
import { motion } from 'motion/react'
import Image from 'next/image'
import { Content } from '@/app/utils/types'

export default function MasonryCard({
    data: { title, media_url },
}: {
    data: Content
}) {
    // const [isView, setIsViewed] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
            className="p-3"
        >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                    src={media_url}
                    alt={title}
                    className="w-full h-auto object-cover"
                    width={100}
                    height={100}
                />
                {/* <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">
              {description}
          </p>
          <a href={source} className="see text-sm items-cente w-fit font-semibold flex transition">
              See more
              <Image alt="arrow" src="/arrow.svg" width={20} height={20}/>
          </a>
        </div> */}
            </div>
        </motion.div>
    )
}
