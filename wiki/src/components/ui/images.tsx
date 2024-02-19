import Image from "next/image";

type ImageProps = {
    src: string
    title: string
    width: number
}

export default function Images({src, title, width}: ImageProps) {
    return (
        <figure className="flex items-center">
            <Image className="" src={src} priority={true} alt={title} width={width} height={36} />
            <h2 className="ml-1 pb-1 font-mono">{title}</h2>
        </figure>
    )
}