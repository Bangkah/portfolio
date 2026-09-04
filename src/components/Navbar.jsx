import React, { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const navItems = useMemo(
        () => [
            { href: "#Home", label: "Home" },
            { href: "#About", label: "About" },
            { href: "#Portofolio", label: "Portofolio" },
            { href: "#Contact", label: "Contact" },
        ],
        []
    );

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navItems.map(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    return {
                        id: item.href.replace("#", ""),
                        offset: section.offsetTop - 300,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find(section => 
                currentPosition >= section.offset && 
                currentPosition < section.offset + section.height
            );

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const top = section.offsetTop - 80;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-200 border-b-3 border-[#111111] ${
                scrolled
                    ? "bg-[#f4f0e6] shadow-[0_4px_0_#111111]"
                    : "bg-[#f4f0e6]"
            }`}
        >
            <div className="mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Neo-Brutalist Badge */}
                    <div className="flex-shrink-0">
                        <a
                            href="#Home"
                            onClick={(e) => scrollToSection(e, "#Home")}
                            className="text-lg font-black tracking-tight text-[#111111] bg-[#ffcf33] px-3 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all inline-block"
                        >
                            mdhiyaulatha
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-8 flex items-center space-x-3">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.href.substring(1);
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider border-2 border-[#111111] rounded-sm transition-all ${
                                            isActive
                                                ? "bg-[#ff5c58] text-white shadow-[3px_3px_0px_#111111] translate-x-[-1px] translate-y-[-1px]"
                                                : "bg-white text-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-[#ffcf33] hover:shadow-[3px_3px_0px_#111111] hover:-translate-y-0.5"
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Navigation Menu"
                            className="p-2 bg-[#ffcf33] text-[#111111] border-2 border-[#111111] shadow-[3px_3px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 stroke-[3]" />
                            ) : (
                                <Menu className="w-6 h-6 stroke-[3]" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden bg-[#f4f0e6] border-t-3 border-[#111111] transition-all duration-200 ease-in-out ${
                    isOpen
                        ? "max-h-screen opacity-100 py-4 shadow-[0_6px_0_#111111]"
                        : "max-h-0 opacity-0 overflow-hidden py-0"
                }`}
            >
                <div className="px-6 space-y-3">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`block px-4 py-2.5 text-sm font-black uppercase tracking-wider border-2 border-[#111111] shadow-[3px_3px_0px_#111111] rounded-sm transition-all ${
                                    isActive
                                        ? "bg-[#ffcf33] text-[#111111]"
                                        : "bg-white text-[#111111] hover:bg-[#ff5c58] hover:text-white"
                                }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;