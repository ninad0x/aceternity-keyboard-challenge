import { useEffect, useState } from "react"
import { arrowKeys, keys } from "../utils/keys"
import { Key } from "./Key"


interface bodyProps {
    dark: boolean,
    keyBorder: string
}

export const KeyboardBody = ({dark, keyBorder}:bodyProps) => {

    const [pressed, setPressed] = useState(new Set());

    const keyDown = (e:KeyboardEvent) => {
        if (e.key.startsWith('F') && e.key.length <= 3) {
            e.preventDefault();
        }
        return setPressed(prev => new Set(prev).add(e.key))
    }

    const keyUp = (e:KeyboardEvent) => {
        return setPressed(prev => {
                prev.delete(e.key) 
                return new Set(prev)
            })
    }

    useEffect(() => {
        window.addEventListener('keydown', keyDown)
        window.addEventListener('keyup', keyUp)

        return () => {
            window.removeEventListener('keydown', keyDown)
            window.removeEventListener('keyup', keyUp)
        }
    }, [])


    return <div className={`m-auto p-2 pb-3 min-w-[826px] w-[826px] h-auto rounded-xl shadow-xl flex flex-wrap transition-all duration-500
    ${dark 
        ? 'bg-[#303033] shadow-lg shadow-black/70 ' 
        : 'bg-slate-500 shadow-lg shadow-slate-600/70'} `}>

        {/* Normal Keys */}
        {keys.map(r => {
            return r.map(c => {
                const isPressed = pressed.has(c.dataKey)
                return <Key type="normal" 
                    keyBorder={keyBorder}
                    primary={c.primary}
                    secondary={c.secondary}
                    width={c.width}
                    isPressed={isPressed}
                    />
            })
        })}


        {/* Arrow keys */}
        <div className="arrowKeys mt-1 grid grid-cols-3">
            {arrowKeys.map(x => {
                const isPressed = pressed.has(x.dataKey)
                return <div>
                        {
                            x.primary === "empty"
                            ? <div></div>
                            : <Key keyBorder={keyBorder} type="arrow" primary={x.primary} width="w-12.5" isPressed={isPressed} />
                        }
                    </div>
                })}
        </div>
    </div>
}