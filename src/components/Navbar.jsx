import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const navItems = ["Home", "About", "Projects", "Contact"];

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10 ,10 ,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        {" "}
                        pei<span className="text-blue-500">.tech</span>{" "}
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <a 
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="nav-hover-btn"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}