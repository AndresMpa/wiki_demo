import { CreatorDrawer } from "@/components/Drawer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Se parte de FLISoL"
};

type LayoutType = {
    children: React.ReactNode
}

export default function Layout({ children }: Readonly<LayoutType>) {
    return (
        <>
            <html lang="es">
                <body>
                    <CreatorDrawer />
                    {children}
                </body>
            </html>
        </>
    )
}