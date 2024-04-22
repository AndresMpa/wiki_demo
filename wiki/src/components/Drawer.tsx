"use client"

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { HoverUser } from "@/components/HoverUser";
import { HoverMenu } from "@/components/HoverMenu";

import { HiUser } from "react-icons/hi2";
import { HiMapPin } from "react-icons/hi2";
import { FaRegCompass } from "react-icons/fa6";

export const PublicDrawer = () => {
    return (
        <Navbar>
            <Button asChild>
                <Link href="/assist">
                    <HiMapPin size={"1.2em"} className="mx-1" /> Asistir
                </Link>
            </Button>
            <Button asChild variant="outline">
                <Link href="/register">
                    <HiUser size={"1.2em"} className="mx-1" /> Ingresar
                </Link>
            </Button>
            <HoverMenu />
        </Navbar>
    )
}

export const CreatorDrawer = () => {
    const pathname = usePathname()
    const country = "Default"
    return (
        <Navbar>
            {pathname === "/entry" && <>
                <Button asChild>
                    <Link href="/assist">
                        <FaRegCompass size={"1.2em"} className="mx-1" /> FLISoL - {country}
                    </Link>
                </Button>
            </>}

            <HoverUser />
        </Navbar>
    )
}