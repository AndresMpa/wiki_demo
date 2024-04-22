"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselItem,
    CarouselNext,
    CarouselContent,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const countries = [
    [
        { "url": "/", "flag": "/countries/argentina.png", title: "argentina" },
    ],
    [
        { "url": "/", "flag": "/countries/argentina.png", title: "argentina" },
    ],
    [
        { "url": "/", "flag": "/countries/argentina.png", title: "argentina" },

    ],
    [
        { "url": "/", "flag": "/countries/argentina.png", title: "argentina" },
    ]
]

export const FlagsCarousel = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="flex w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            orientation="horizontal"
            opts={{
                align: "start",
                loop: true
            }}
        >
            <CarouselPrevious />
            <CarouselContent>
                {countries.map((item, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="flex p-1">
                            <Image
                                width={200}
                                height={100}
                                src={item}
                                alt={item}
                                className="w-[200px] h-auto"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext />
        </Carousel>
    )
}