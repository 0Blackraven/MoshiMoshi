import { useRef, useState, type ReactElement } from "react"

type BentoProps = {
    src: string,
    title: ReactElement,
    desc: string | null,
}

const BentoCard = ({ src, title, desc = null}: BentoProps) => {
    return (
        <div className="relative size-full ">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">
                        {title}
                    </h1>
                    {
                        (desc !== null) && (
                            <p className="mt-3 max-w-64 text-xs md:text-base ">
                                {desc}
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

type TiltProps = {
    children: ReactElement,
    classStyle: string
}

export const BentoCardTilt = ({children, classStyle}:TiltProps) => {

    const [transformStyle , setTransformStyle] = useState("");
    const tiltRef = useRef<HTMLDivElement|null>(null);

    const mouseMoveHandler = (e: React.MouseEvent) =>{
        if(!tiltRef.current) return;
        
        const {top, left, width, height} = tiltRef.current.getBoundingClientRect();
        const relativeX = (e.clientX - left)/width;
        const relativeY = (e.clientY - top)/height;

        const tiltX = (relativeY - 0.5) * 10;
        const tiltY = (relativeX - 0.5) * -10;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.9, 0.9, 0.9)`

        setTransformStyle(newTransform);
    }
    
    const mouseLeaveHandler = () =>{
        setTransformStyle("");
    }   

    return (
        <div 
            className={classStyle} 
            ref={tiltRef} 
            onMouseMove={(e) => mouseMoveHandler(e)} 
            onMouseLeave={mouseLeaveHandler} 
            style={{transform: transformStyle}}
        >
            {children}
        </div>
    )
}

export default BentoCard