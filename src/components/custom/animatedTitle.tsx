import gsap from "gsap";
import { useEffect, useRef } from "react"

type AnimatedTitleProps = {
    title: string,
    containerClass: string
}

const AnimatedTitle = ({ title, containerClass }: AnimatedTitleProps) => {

    const textRef = useRef<HTMLDivElement|null>(null);

    useEffect(() =>{
        const ctx = gsap.context(() =>{
            const textAnim = gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    start: '100 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
                }
            });

            textAnim.to('.animated-word',{
                opacity: 1,
                transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
                ease: 'power1.inOut',
                stagger: 0.03
            })
        }, textRef)

        return () => ctx.revert()
    },[])

    return (
        <div className={`animated-title ${containerClass}`} ref={textRef}>
            {title.split('<br/>').map((line, index) => (
                <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                    {line.split(' ').map((word, i) => (
                        <span className="animated-word" dangerouslySetInnerHTML={{ __html: word }} key={i} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default AnimatedTitle