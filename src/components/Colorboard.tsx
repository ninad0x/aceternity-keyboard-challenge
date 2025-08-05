
const pallet = ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"]

interface boardProp {
  nav: boolean;
  onClick: (color: string) => void;
}

export default function Colorboard({nav, onClick}: boardProp) {

  return <div className={`grid grid-cols-5 gap-1.5  transition-all duration-500 ease-in-out ${nav
      ? 'opacity-100 scale-100'
      : 'opacity-0 scale-0'}`}
  >
    {pallet.map((color) => (
      <button
        onClick={() => onClick(color)}
        onMouseDown={e => e.preventDefault()}
        style={{backgroundColor: color}}
        key={color}
        className="w-7 h-7 rounded border-2 cursor-pointer border-white/50 hover:scale-110 transition-transform"
      />
    ))}
</div>
}