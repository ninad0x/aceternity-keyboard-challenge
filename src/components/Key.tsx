
interface KeyProps {
    type: "normal" | "arrow"
    primary?: string;
    secondary?: string;
    width?: string;
    height?: string;
    isPressed: boolean;
    keyBorder: string
}

const defaultKeyStyle = " text-sm bg-[#0A090F] shadow-md cursor-pointer hover:scale-[0.98] hover:shadow-none hover:text-[13.5px]  text-white flex items-center justify-center "


const buttonTypes = {
    "normal": "m-0.5 p-4 h-15 rounded-xl",
    "arrow": "mx-0.5 h-7 rounded-[10px]"
}


export const Key = ({primary, secondary, type, width, isPressed, keyBorder}: KeyProps) => {
    console.log("border --", keyBorder);
    
    return <button
    onClick={(e) => e.currentTarget.blur()}
    style={{
        borderColor: isPressed ? keyBorder : '',
        boxShadow: isPressed ? `0 0 10px ${keyBorder}, 0 0 20px ${keyBorder}40`: ''
    }}
    className={`border-[0.5px] border-gray-600
        transition-transform duration-100
        ${defaultKeyStyle}
        ${type}
        ${buttonTypes[type]}
        ${width ?? "w-15 "}
        ${isPressed ? `border-[4px] -translate-y-1 shadow-lg` : `shadow-white`}
    `}>
        {secondary}
        {secondary && <br />}
        {primary}

    </button>
}

