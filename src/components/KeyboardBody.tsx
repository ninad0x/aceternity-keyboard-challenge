import { arrowKeys, keys } from "../utils/keys"
import { Key } from "./Key"



export const KeyboardBody = () => {
    return <div className="m-auto p-2 pb-3 bg-gray-800 min-w-236 max-w-236 h-auto rounded-xl shadow-xl flex flex-wrap">


        {keys.map(r => {
            return r.map(c => {
                return <Key type="normal" primary={c.primary} secondary={c.secondary} width={c.width}/>
            })
        })}

        <div className="arrowKeys mt-1 grid grid-cols-3">
            {arrowKeys.map(x => {
                return <div>
                        {
                            x.primary === "empty"
                            ? <div></div>
                            : <Key type="arrow" primary={x.primary} width="w-16"/>
                        }
                    </div>
                })}
        </div>
    </div>
}