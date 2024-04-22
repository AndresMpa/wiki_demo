'use client'

import { useState } from "react";

import Markdown from "react-markdown"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import { Writer } from "@/components/Writer";

import { FaPenToSquare } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";


export const Editor = () => {
    const [status, setStatus] = useState(true)
    const handleEditor = () => setStatus(!status)
    return (
        <>
            <Tabs defaultValue="writer" className="w-full p-2 mx-auto">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger asChild value="writer">
                        <Button className={`w-full ${status ? "bg-orange-700" : ""}`} onClick={handleEditor}>
                            <FaPenToSquare className="mx-5" /> Editor
                        </Button>
                    </TabsTrigger>
                    <TabsTrigger asChild value="preview">
                        <Button className={`w-full ${!status ? "bg-orange-700" : ""}`} onClick={handleEditor}>
                            <FaEye className="mx-5" /> Preview
                        </Button>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="writer">
                    <div className="w-70">
                        <Writer />
                    </div>
                </TabsContent>
                <TabsContent value="preview">
                    <Markdown></Markdown>
                </TabsContent>
            </Tabs>
        </>
    )
}