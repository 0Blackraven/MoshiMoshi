import { useRef, useState } from "react";
import Button from "./button";
import { StepBack } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef<HTMLVideoElement|null>(null);
    const miniVideoRef = useRef<HTMLVideoElement|null>(null);
    const upcomingVideo = (currentIndex % totalVideos) + 1;

    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', {
                visibility: 'visible'
            })
            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current?.play(),
            })
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut'
            })
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true })

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
            borderRadius: '0 0 40% 10%'
        })

        gsap.from('#video-frame', {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true
            }
        })
    })

    const handleVideoChangeClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideo);
    }

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => {
            const nextLoaded = prev + 1;
            if (nextLoaded >= 2) {
                setIsLoading(false);
            }
            return nextLoaded;
        });
    }

    const getHeroVideoSrc = (index: number) => `videos/hero-${index}.mp4`

    return (
        <div className='h-dvh w-screen overflow-x-hidden relative' id="nexus">
            {isLoading && (
                <div className="flex-center absolute-center z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                    </div>
                </div>
            )}
            <div className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75' id="video-frame">
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div onClick={handleVideoChangeClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-80">
                            <video
                                src={getHeroVideoSrc(upcomingVideo)}
                                ref={miniVideoRef}
                                muted
                                loop
                                id="current-video"
                                className="object-cover object-center size-64 origin-center"
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVideoRef}
                        src={getHeroVideoSrc(currentIndex)}
                        loop
                        muted
                        id="next-video"
                        className="absolute-center invisible absolute z-20 object-center object-cover"
                    />
                    <video
                        src={getHeroVideoSrc(currentIndex)}
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoad}
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
    )
}

export default Hero;