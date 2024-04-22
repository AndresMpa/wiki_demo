import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "./ui/button"

import { FaCalendarDay } from "react-icons/fa6";
import { FaClipboardUser } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa6";
import Link from "next/link";


export const HoverUser = () => {
    const user = "Jhon Doe"
    const year = "2024"
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant={"outline"}>
                    {user} <FaClipboardUser size={"1.2em"} className="mx-1" />
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4 bg-white-100">
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@{user}</h4>
                        <p className="text-sm">
                            Editando entrada de FLISoL
                        </p>
                        <div className="flex items-center pt-2">
                            <FaCalendarDay className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                FLISoL - {year}
                            </span>
                        </div>
                        <Button asChild className="bg-red-500">
                            <Link href="/">
                                <FaDoorOpen size={"1.2em"} className="mx-1" /> Cerrar sesion
                            </Link>
                        </Button>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}