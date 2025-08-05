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


    return <div className={`m-auto p-2 pb-3 min-w-236 max-w-236 h-auto rounded-xl shadow-xl flex flex-wrap transition-all duration-500
    ${dark 
        ? 'bg-zinc-800 shadow-zinc-950/70 shadow-lg' 
        : 'bg-slate-500 shadow-slate-600/70 shadow-lg'} `}>

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
                            : <Key keyBorder={keyBorder} type="arrow" primary={x.primary} width="w-16" isPressed={isPressed} />
                        }
                    </div>
                })}
        </div>
    </div>
}