import { useEffect, useRef, useState } from "react"
import Button from "./button";
import { Navigation, Volume2 } from "lucide-react";
import gsap from "gsap";

const links = ['nexus', 'vault', 'prologue', 'about', 'contact'];

const NavBar = () => {
    const [audioPlaying, setAUdioPlaying] = useState<boolean>(false);
    const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const lastYRef = useRef<number>(0);

    useEffect(() => {
        if (audioPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }, [audioPlaying])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 0) return;

            if (currentScrollY === 0) {
                setIsNavVisible(true);
                navRef.current?.classList.remove('floating-nav')
            } else if (currentScrollY > lastYRef.current) {
                setIsNavVisible(false);
                
            } else if (currentScrollY < lastYRef.current) {
                setIsNavVisible(true);
                navRef.current?.classList.add('floating-nav')
            }

            lastYRef.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(()=> {
        gsap.to(navRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.3,
            ease: 'power1.in'
        })
    },[isNavVisible])

    const toggleMusic = () => {
        setAUdioPlaying((prev) => !prev);
    }

    return (
        <div ref={navRef} className="fixed top-0 inset-x-0 z-50 h-16 transition-all duration-700 sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between">
                    <div className="flex items-center gap-7">
                        <img
                            src="/img/logo.png"
                            alt="logo"
                            className="w-10"
                        />
                        <Button
                            id="product-btn"
                            title="Products"
                            leftIcon={<Navigation className="size-4 fill-black stroke-0" />}
                            parentClass="bg-blue-50 md:flex hidden items-center justify-center gap-2"
                        />
                    </div>

                    <div className="flex items-center h-full">
                        <div className="hidden md:block">
                            {links.map(link => (
                                <a className="nav-hover-btn" key={link} href={`#${link.toLowerCase()}`}>
                                    {link}
                                </a>
                            ))}
                        </div>

                        <button className="ml-10 flex items-center space-x-0.5 pr-3" onClick={toggleMusic}>
                            <audio
                                ref={audioRef}
                                className="hidden"
                                src="/audio/loop.mp3"
                                loop
                            />
                            {audioPlaying ?
                                [1, 2, 3, 4].map(bar => (
                                    <div
                                        key={bar}
                                        className={`indicator-line active`}
                                        style={{ animationDelay: `${bar * 0.2}s` }}
                                    />
                                )) :
                                <button>
                                    <Volume2 className="stroke-white stroke-2" />
                                </button>
                            }
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar