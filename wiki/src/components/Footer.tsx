import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";



export const Footer = () => {
    return (
        <footer className="flex bg-gray-700 p-2 justify-between overflow-hidden">
            <div className="flex items-center text-white">
                <p className="inline-block align-middle">
                    Todos los contenidos y escritos están cobijados bajo <Link className="text-orange-700 hover:text-red-500" href={"https://creativecommons.org/licenses/by-sa/4.0/"} passHref={true} rel="noopener noreferrer" target="_blank">CC Attribution-Share Alike 4.0 International.</Link>
                </p>
            </div>
            <div>
                <Button asChild variant="ghost" className="hover:text-black-700">
                    <Link href="https://github.com/AndresMpa/wiki_demo" passHref={true} rel="noopener noreferrer" target="_blank">
                        <FaSquareXTwitter />
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="hover:text-blue-700">
                    <Link href="https://github.com/AndresMpa/wiki_demo" passHref={true} rel="noopener noreferrer" target="_blank">
                        <FaSquareFacebook />
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="hover:text-blue-500">
                    <Link href="https://github.com/AndresMpa/wiki_demo" passHref={true} rel="noopener noreferrer" target="_blank">
                        <FaLinkedinIn />
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="hover:text-pink-500">
                    <Link href="https://github.com/AndresMpa/wiki_demo" passHref={true} rel="noopener noreferrer" target="_blank">
                        <FaInstagram />
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="hover:text-sky-400">
                    <Link href="https://github.com/AndresMpa/wiki_demo" passHref={true} rel="noopener noreferrer" target="_blank">
                        <FaTelegram />
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="hover:text-red-700">
                    <Link href="https://github.com/AndresMpa/wiki_demo" passHref={true} rel="noopener noreferrer" target="_blank">
                        <FaYoutube />
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="hover:text-black-700">
                    <Link href="https://github.com/AndresMpa/wiki_demo" passHref={true} rel="noopener noreferrer" target="_blank">
                        <FaTiktok />
                    </Link>
                </Button>
            </div>
        </footer>
    )
}