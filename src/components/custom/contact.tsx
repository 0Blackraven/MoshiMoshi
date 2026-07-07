import AnimatedTitle from "./animatedTitle"

const Contact = () => {
    return (
        <div className='my-20 min-h-96 px-10 w-screen' id='contact'>
            <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
                <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
                    <div className='contact-clip-path-1'>
                        <img
                            src="img/contact-1.webp"
                        />
                    </div>
                    <div className='contact-clip-path-2 lg:translate-y-40 translate-y-60'>
                        <img
                            src="img/contact-2.webp"
                        />
                    </div>
                </div>

                <div className='absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
                    <div className='absolute md:scale-125'>
                        <img
                            src="img/swordman-partial.webp"
                        />
                    </div>
                    <div className='sword-man-clip-path md:scale-125'>
                        <img
                            src="img/swordman.webp"
                        />
                    </div>
                </div>

                <div className='flex flex-col items-center text-center sm:justify-center'>
                    <p className='font-general text-[10px] uppercase mb-10'>
                        do not join anything
                    </p>

                    <AnimatedTitle
                        title="did u like the <br/> desig<b>n</b>"
                        containerClass="special-font !md:text-[6.2rem] w-full font-zentry !font-black !leading-[.9] text-5xl"
                    />

                    <div className='h-35 hidden lg:block'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact