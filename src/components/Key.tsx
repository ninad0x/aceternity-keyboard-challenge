
interface KeyProps {
    type: "normal" | "arrow"
    primary?: string;
    secondary?: string;
    width?: string;
    height?: string;
}

const defaultKeyStyle = "text-sm bg-black shadow-white shadow-lg cursor-pointer hover:scale-[0.95] hover:shadow-none hover:text-xs text-white flex items-center justify-center "


const buttonTypes = {
    "normal": "m-0.5 p-4 h-15 rounded-xl",
    "arrow": "mx-0.5 h-7 rounded-[10px]"
}


export const Key = ({primary, secondary, type, width}: KeyProps) => {
    return <button
    className={`
        ${defaultKeyStyle}
        ${type}
        ${buttonTypes[type]}
        ${width ?? "w-15 "}
    `}>
        {secondary}
        {secondary && <br />}
        {primary}

    </button>
}

