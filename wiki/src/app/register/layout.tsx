import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Registro"
};

type LayoutType = {
    children: React.ReactNode
}

export default function Layout({ children }: Readonly<LayoutType>) {
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