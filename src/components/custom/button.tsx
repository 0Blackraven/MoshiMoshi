import type { ReactElement } from "react"

type propsType = {
    id: string,
    title: string,
    leftIcon?: ReactElement,
    rightIcon?: ReactElement,
    parentClass: string
}

const Button = ({title, id, leftIcon, parentClass, rightIcon}: propsType) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${parentClass}`}>
        {leftIcon}
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
            {title}
        </span>
        {rightIcon}
    </button>
  )
}

export default Button