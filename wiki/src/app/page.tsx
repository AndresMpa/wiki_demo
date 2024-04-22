import { PublicDrawer } from "@/components/Drawer"
import { WelcomeGreeter } from "@/components/greeter/WelcomeGreeter"
import { Footer } from "@/components/Footer"
import { FlagsCarousel } from "@/components/flags/Carousel"

export default function Main() {

    return (
        <>
            <PublicDrawer />
            <WelcomeGreeter />
            <div className="bg-black h-[800px]">
                <FlagsCarousel />
            </div>
            <Footer />
        </>
    )
}
