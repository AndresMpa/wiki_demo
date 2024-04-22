import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Register() {
    return (
        <main>
            <h1>Main</h1>
            <Button asChild>
                <Link href={"/select"}>Ingresar</Link>
            </Button>
        </main>
    )
}
