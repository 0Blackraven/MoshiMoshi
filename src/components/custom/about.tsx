import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedTitle from './animatedTitle'

const About = () => {

    useGSAP(()=>{
        const clipAnim = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        })
        clipAnim.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })

    return (
        <div className='min-h-screen w-screen' id='about'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <p className='font-general text-sm uppercase md:text-[10px]'>
                    Welcome to Zentry
                </p>
                <AnimatedTitle 
                    title="disc<b>o</b>ver the worlds l<b>a</b>rgest sh<b>a</b>red <b>a</b>dventure"
                    containerClass="mt-5 !text-center !text-black"
                />
                <div className='about-subtext'>
                    <p>
                        the game of games begins <br />
                        zentry unites every player from countless games and platforms
                    </p>
                </div>
            </div>
            <div className='h-dvh w-screen' id="clip">
                <div className="mask-clip-path about-image">
                    <img
                        src='img/about.webp'
                        alt='background'
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default About