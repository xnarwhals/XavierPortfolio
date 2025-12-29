import './index.scss';

function How2Play() {
    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
            <span className="flex items-center gap-3 border border-yellow-400/35 bg-black/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-100 transition duration-200 hover:-translate-y-0.5 hover:border-yellow-300/70 hover:text-yellow-50 hover:shadow-[0_0_18px_rgba(255,215,0,0.25)]">
                <span className="keycap">A</span>
                Press to view trailer
            </span>
            <span className="flex items-center gap-3 border border-yellow-400/35 bg-black/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-100 transition duration-200 hover:-translate-y-0.5 hover:border-yellow-300/70 hover:text-yellow-50 hover:shadow-[0_0_18px_rgba(255,215,0,0.25)]">
                <span className="keycap">B</span>
                Press to view itch.io
            </span>
            <span className="flex items-center gap-3 border border-yellow-400/35 bg-black/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-100 transition duration-200 hover:-translate-y-0.5 hover:border-yellow-300/70 hover:text-yellow-50 hover:shadow-[0_0_18px_rgba(255,215,0,0.25)]">
                <span className="keycap keycap--wide">Up/Down</span>
                Navigate general skills
            </span>
            <span className="flex items-center gap-3 border border-yellow-400/35 bg-black/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-100 transition duration-200 hover:-translate-y-0.5 hover:border-yellow-300/70 hover:text-yellow-50 hover:shadow-[0_0_18px_rgba(255,215,0,0.25)]">
                <span className="keycap keycap--wide">Left/Right</span>
                Navigate game info
            </span>
            <span className="flex items-center gap-3 border border-yellow-400/35 bg-black/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-100 transition duration-200 hover:-translate-y-0.5 hover:border-yellow-300/70 hover:text-yellow-50 hover:shadow-[0_0_18px_rgba(255,215,0,0.25)]">
                <span className="keycap keycap--wide">Start</span>
                Home screen  
            </span>
            <span className="flex items-center gap-3 border border-yellow-400/35 bg-black/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-100 transition duration-200 hover:-translate-y-0.5 hover:border-yellow-300/70 hover:text-yellow-50 hover:shadow-[0_0_18px_rgba(255,215,0,0.25)]">
                <span className="keycap keycap--wide">Select</span>
                Game gist  
            </span>
        </div>
    )
}

export default How2Play;

