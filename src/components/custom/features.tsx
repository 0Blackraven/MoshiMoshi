import BentoCard, { BentoCardTilt } from './bentoCard'



const Features = () => {
    return (
        <section className='bg-black pb-52'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32 '>
                    <p className='font-circular-web text-lg text-blue-50 capitalize'>Into the metagame layer</p>
                    <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
                        Immerse yourself in a rich and ever-expanding universe where a vibrant
                        array of products converge into an interconnected overlay experience
                        on your world.
                    </p>
                </div>
                <BentoCardTilt classStyle='border-hsla relative mb-7 h-96 md:h-[65vh] w-full overflow-hidden rounded-md '>
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={
                            <>
                                radia<b>n</b>t
                            </>
                        }
                        desc="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                    />
                </BentoCardTilt>
                <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                    <BentoCardTilt classStyle='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 '>
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={
                                <>
                                    zig<b>m</b>a
                                </>
                            }
                            desc="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                        />
                    </BentoCardTilt>
                    <BentoCardTilt classStyle="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={
                                <>
                                    n<b>e</b>xus
                                </>
                            }
                            desc="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                        />
                    </BentoCardTilt>

                    <BentoCardTilt classStyle="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title={
                                <>
                                    az<b>u</b>l
                                </>
                            }
                            desc="A cross-world AI Agent - elevating your gameplay to be more fun and productive."  
                        />
                    </BentoCardTilt>
                    <BentoCardTilt classStyle="bento-tilt_1">
                        <video
                            src="videos/feature-5.mp4"
                            loop
                            muted
                            autoPlay
                            className="size-full object-cover object-center"
                        />
                    </BentoCardTilt>
                </div>
            </div>
        </section>
    )
}

export default Features