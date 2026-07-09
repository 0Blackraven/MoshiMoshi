import { useRef, useState, useCallback } from "react";
import Button from "./button";
import { StepBack } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const videosLoadedRef = useRef<number>(0);

    const totalVideos = 4;
    const nextVideoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const upcomingVideo = (currentIndex % totalVideos) + 1;

    const handleVideoLoad = () => {
        videosLoadedRef.current += 1;
        if (videosLoadedRef.current >= totalVideos) {
            setIsLoading(false);
        }
    };

    const getHeroVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

    const { contextSafe } = useGSAP({ scope: containerRef });

    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
            borderRadius: "0% 0% 40% 10%",
        });
        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    }, { scope: containerRef });

    const handleVideoChangeClick = useCallback(() => {
        contextSafe(() => {
            if (hasClicked) return;
            setHasClicked(true);

            if (nextVideoRef.current) {
                nextVideoRef.current.play();
            }

            gsap.set('#next-video', { visibility: 'visible' });
            
            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onComplete: () => {
                    setCurrentIndex(upcomingVideo);
                    setHasClicked(false);

                    setTimeout(() => {
                        gsap.set('#next-video', {
                            visibility: 'hidden',
                            scale: 0.5,
                            width: 'auto',
                            height: 'auto'
                        });
                    },50);
                }
            });

            gsap.from('#mini-video-container', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut'
            });
        })();
    }, [hasClicked, upcomingVideo, contextSafe]);

    return (
        <div ref={containerRef} className='h-dvh w-screen overflow-x-hidden relative' id="nexus">
            {isLoading && (
                <div className="flex-center absolute-center z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                    </div>
                </div>
            )}
            
            <div className="hidden">
                {[1, 2, 3, 4].map((index) => (
                    <video 
                        key={index} 
                        src={getHeroVideoSrc(index)} 
                        preload="auto" 
                        onLoadedData={handleVideoLoad} 
                    />
                ))}
            </div>

            <div className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75' id="video-frame">
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div 
                            id="mini-video-container"
                            onClick={handleVideoChangeClick} 
                            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-80"
                        >
                            <video
                                src={getHeroVideoSrc(upcomingVideo)}
                                muted
                                loop
                                playsInline
                                className="object-cover object-center size-64 origin-center"
                            />
                        </div>
                    </div>

                    <video
                        ref={nextVideoRef}
                        src={getHeroVideoSrc(upcomingVideo)}
                        loop
                        muted
                        playsInline
                        id="next-video"
                        className="absolute-center invisible absolute z-20 object-center object-cover size-64"
                    />

                    <video
                        key={currentIndex} 
                        src={getHeroVideoSrc(currentIndex)}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute left-0 top-0 size-full object-cover object-center"
                    />
                </div>

                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 select-none">
                    G<b>A</b>MING
                </h1>

                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-blue-100 select-none">
                            redefi<b>n</b>e
                        </h1>
                        <p className="mb-5 max-w-64 font-robert-regular text-blue-100 select-none">
                            Enter the Metagame Layer <br /> Unleash the Beast
                        </p>
                        <Button id={"watch trailer"} title="Watch Trailer" leftIcon={<StepBack className="rotate-180 fill-black" />} parentClass={" bg-yellow-300 flex-center gap-3"} />
                    </div>
                </div>
            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black select-none">
                G<b>A</b>MING
            </h1>
        </div>
    );
};

export default Hero;