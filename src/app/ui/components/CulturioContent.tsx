"use client"
import { Content, } from "@/app/utils/types";
import { useState } from "react";
import { Masonry } from "masonic";
import { useWindowSize } from 'react-use';
import Image from "next/image";
import { contentPlaceholder } from "@/app/utils/placeholder";
// import Fallback from "./Fallback";
// import { useQuery } from "@tanstack/react-query";

export default function CulturioContent(){
    const [content] = useState<Content[]>(contentPlaceholder)
    const { width } = useWindowSize();

    // const {isLoading, data, error} = useQuery({
    //     queryKey: ['content'],
    //     queryFn: fetchContent 
    // })

    // async function fetchContent(){
    //     const res = await fetch('http://localhost:3001/api/exhibit',)
    //     const data: Data = await res.json()
    //     setContent(data.data)

    //     return data
    // }    

      
    const MasonryCard = ({ data: { title, source, media_url, description } }: {data: Content}) => (
        <div className="p-3">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image 
            src={media_url} 
            alt={title}
            className="w-full h-auto object-cover"
            width={100}
            height={100}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">
                {description}
            </p>
            <a href={source} className="see text-sm items-cente w-fit font-semibold flex transition">
                See more
                <Image alt="arrow" src="/arrow.svg" width={20} height={20}/>
            </a>
          </div>
        </div>
      </div>
    );

    const getColumns = (width: number) => {
        if (width < 640) return 1;
        if (width < 768) return 2;
        if (width < 1024) return 3;
        return 4;
      };

    return (
        <section className="p-3">
            <Masonry
        items={content}
        columnGutter={16}
        columnWidth={300}
        render={MasonryCard}
        columnCount={getColumns(width)}
      />
        </section>
    );
}