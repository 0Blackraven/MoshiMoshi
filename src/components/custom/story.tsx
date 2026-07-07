import { useRef } from "react"
import AnimatedTitle from "./animatedTitle"
import gsap from "gsap";
import RoundedDiv from "./roundedDiv";
import Button from "./button";


const Story = () => {

    const imageRef = useRef<HTMLImageElement | null>(null);

    const mouseMoveHandler = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const element = imageRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((y - centerY) / centerY) * -10;
        const rotateX = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })
    }

    const mouseLeaveHandler = () => {
        const element = imageRef.current;

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut'
        })
    }

    return (
        <section className="min-h-dvh w-screen bg-black text-blue-50" id="prologue">
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className="font-general uppercase text-sm md:text-[10px]">
                    the multiversal ip world
                </p>

                <div className="relative size-full select-none">
                    <AnimatedTitle
                        title="the st<b>o</b>ry <b>o</b>f <br/> a hidden real<b>m</b>"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />

                    <div className="story-img-container select-none">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    ref={imageRef}
                                    src="/img/entrance.webp"
                                    alt="entrance"
                                    className="object-contain"
                                    onMouseEnter={mouseLeaveHandler}
                                    onMouseLeave={mouseLeaveHandler}
                                    onMouseUp={mouseLeaveHandler}
                                    onMouseMove={mouseMoveHandler}
                                />
                            </div>
                        </div>
                        <RoundedDiv />
                    </div>
                </div>

                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start select-none">
                            Where realms converge, lies Zentry and the boundless pillar.
                            Discover its secrets and shape your fate amidst infinite
                            opportunities.
                        </p>

                        <Button
                            id="realm-btn"
                            title="discover prologue"
                            parentClass="mt-5"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story