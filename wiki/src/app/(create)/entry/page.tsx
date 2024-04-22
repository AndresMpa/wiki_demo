"use client"

import { Editor } from "@/components/Editor";
import EditorContext from "@/lib/context";

export default function Entry() {
    return (
        <EditorContext.Provider value={EditorContext}>
            <Editor />
        </EditorContext.Provider>
    )
}