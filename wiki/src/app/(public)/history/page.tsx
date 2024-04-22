import { Suspense } from "react";

export default function History() {
    return (
        <>
            <h1>Historial</h1>
            <Suspense fallback={
                <h2>Skeleton loader here</h2>
            }>
                <h2>Loaded component</h2>
            </Suspense>
        </>

    )
}