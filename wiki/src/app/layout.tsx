import { createMetadata } from "./shared-metadata";
import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = createMetadata();

type LayoutType = {
    children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<LayoutType>) {
    return (
        <>
            <html lang="es">
                <body>
                    {children}
                </body>
            </html>
        </>
    )
}