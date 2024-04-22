import {
    Sheet,
    SheetTitle,
    SheetHeader,
    SheetTrigger,
    SheetContent,
    SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "./ui/button";

import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";

export const HoverMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost">
                    <HiMiniAdjustmentsHorizontal size={"1.2em"} />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}