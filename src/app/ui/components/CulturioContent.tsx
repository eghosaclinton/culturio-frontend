'use client'
import { Content } from '@/app/utils/types'
import { useState } from 'react'
import { Masonry } from 'masonic'
import { useColumn } from '@/app/hooks/useColumn'
import MasonryCard from './MasonryCard'
import { contentPlaceholder } from '@/app/utils/placeholder'
import { useUserStore } from '@/app/store/userStore'

export default function CulturioContent() {
    const [content] = useState<Content[]>(contentPlaceholder)
    const { columnsNum, columnsGutter } = useColumn()
    const userId = useUserStore((state) => state.id)
    console.log(userId)

    return (
        <section className="p-3 relative">
            <Masonry
                className="image-list"
                items={content}
                columnGutter={columnsGutter}
                columnWidth={300}
                render={MasonryCard}
                columnCount={columnsNum}
            />
        </section>
    )
}
