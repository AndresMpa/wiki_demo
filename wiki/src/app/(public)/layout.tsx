import { PublicDrawer } from "@/components/Drawer"
import { Footer } from "@/components/Footer"

type LayoutType = {
    children: React.ReactNode
}

export default function Layout({ children }: Readonly<LayoutType>) {
    return (
        <>
            <html lang="es">
                <body>
                    <PublicDrawer />
                    {children}
                    <Footer />
                </body>
            </html>
        </>
    )
}