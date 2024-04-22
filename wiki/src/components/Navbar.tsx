import Images from "./ui/images"

type NavbarProps = {
    children: React.ReactNode
}

const defaultImage = {
    src: "/logos/flisol.png",
    title: "FLISoL",
    width: 36,
}

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return (
        <nav className="flex bg-gray-700 p-2 justify-between overflow-hidden">
            <Images {...defaultImage} />
            <div className="flex ml-auto">
                {children}
            </div>
        </nav>
    )
}