
interface KeyProps {
    type: "normal" | "arrow"
    primary?: string;
    secondary?: string;
    width?: string;
    height?: string;
    isPressed: boolean;
    keyBorder: string
}

const defaultKeyStyle = "text-[12px] text-zinc-300 bg-[#0A090D] cursor-pointer hover:scale-[0.98] hover:shadow-none hover:translate-y-px  flex items-center justify-center "


const buttonTypes = {
    "normal": "m-[2.2px] p-4 h-13 rounded-xl",
    "arrow": "mx-0.5 h-6 rounded-[10px]"
}


export const Key = ({primary, secondary, type, width, isPressed, keyBorder}: KeyProps) => {
    
    return <button
    onClick={(e) => e.currentTarget.blur()}
    style={{
        borderColor: isPressed ? keyBorder : '',
        boxShadow: isPressed ? `0 0 10px ${keyBorder}, 0 0 20px ${keyBorder}40`: ''
    }}
    className={`border border-gray-700 m-
        transition-transform duration-100
        ${defaultKeyStyle}
        ${type}
        ${buttonTypes[type]}
        ${width ?? "w-13 "}
        ${isPressed ? `border-[4px] -translate-y-1 shadow-lg` : `shadow-lg shadow-white/50  `}
    `}>
        {secondary}
        {secondary && <br />}
        {primary}

    </button>
}

