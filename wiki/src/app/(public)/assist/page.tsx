import dynamic from "next/dynamic";
import { useMemo } from "react";

import FlisolGreeter from "@/components/greeter/FlisolGreeter";

export default async function Assist() {
    const Map = useMemo(() => dynamic(
        () => import('@/components/map/'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])
    return (
        <>
            <FlisolGreeter />
            <div className="bg-orange-700 mx-auto my-5 w-[98%] h-[480px]">
                <Map posix={[4.79029, -75.69003]} />
            </div>
        </>
    )
}