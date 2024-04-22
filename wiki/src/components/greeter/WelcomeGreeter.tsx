import Image from "next/image"
import '@/styles/welcome-greeter.css'

export const WelcomeGreeter = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <section>
            <div className="wallpaper"></div>
            <div className="wallpaper bar_1"></div>
            <div className="wallpaper bar_2"></div>
            <div className="wallpaper bar_3"></div>

            <article className="flex justify-between">
                <div className="flex flex-col justify-around ml-52">
                    <div className="title">
                        <span className="ml-8">
                            FESTIVAL
                            LATINOAMERICA
                            DE INSTALACIÓN DE
                            SOFTWARE LIBRE - {year}
                        </span>
                    </div>
                </div>

                <div className="flex">
                    <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="GNU/Linux"
                        src={"/logos/gnu_linux.png"}
                        className="banner w-full h-auto"
                    />
                </div>
            </article>
        </section >
    )
}