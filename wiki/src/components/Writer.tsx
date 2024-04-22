import Link from "next/link";
import { toast } from "sonner"
import { useContext, useState } from "react";
import EditorContext from "@/lib/context";


import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"

import { FaMapLocationDot } from "react-icons/fa6";
import { FaFloppyDisk } from "react-icons/fa6";
import { FaHeading } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { FaBold } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

export const Writer = () => {
    const contextData = useContext(EditorContext)
    const [text, setText] = useState("")

    const handleText = (value: string) => setText(value)

    const entryName = "Default"
    return (
        <section>
            <article className="flex bg-gray-700 py-2 px-12 justify-between overflow-hidden">
                <Button variant={"ghost"} aria-label="Toggle italic">
                    <FaHeading className="h-4 w-4" />
                </Button>
                <Button variant={"ghost"} aria-label="Toggle italic">
                    <FaBold className="h-4 w-4" />
                </Button>
                <Button variant={"ghost"} aria-label="Toggle italic">
                    <FaItalic className="h-4 w-4" />
                </Button>
                <Button variant={"ghost"} aria-label="Toggle italic">
                    <FaLink className="h-4 w-4" />
                </Button>
                <Button variant={"ghost"} aria-label="Toggle italic">
                    <FaImage className="h-4 w-4" />
                </Button>
                <Button variant={"ghost"} aria-label="Toggle italic">
                    <FaMapLocationDot className="h-4 w-4" />
                </Button>


                <Button
                    variant="ghost"
                    onClick={() => {
                        console.log(text)
                        toast(`Entrada guardada exitosamente`, {
                            description: `FLISoL - ${entryName} guardado`,
                            action: {
                                label: "Deshacer",
                                onClick: () => console.log(text),
                            },
                        })
                    }

                    }
                >

                    <FaFloppyDisk size={"1.2em"} className="mx-1" />
                </Button>
            </article>

            <div className="flex flex-col px-4 w-full">
                <Label className="py-2" htmlFor="message-2">Editando entrada de FLISoL - {entryName}</Label>
                <Textarea value={text} onChange={(event) => handleText(event?.target.value)} className="p-4 min-h-[500px] rounded-none" placeholder="Inicia un nuevo recuerdo..." id="message-2" />
                <p className="t-2 text-sm text-muted-foreground">
                    Este editor funciona sobre <Link className="text-orange-700" href={"https://es.wikipedia.org/wiki/Markdown"} passHref={true} target="_black">Markdwon</Link>, si requieres ayuda puedes consultar <Link className="text-orange-700" href={"https://commonmark.org/help/"} passHref={true} target="_blanck">esta guía</Link>
                </p>
            </div>
        </section>
    )
}