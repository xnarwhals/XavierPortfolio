import { useState, useRef, useEffect } from "react";
import "./index.css";

export function GoldButton({ label, selected, onSelect, showDiamond = false, width = 160, ...buttonProps }) {
  const [scanning, setScanning] = useState(false);
  const [bursting, setBursting] = useState(false);
  const scanTimer = useRef(null);
  const burstTimer = useRef(null);

  const handleClick = () => {
    if (!selected) {
      setScanning(true);
      setBursting(true);
      clearTimeout(scanTimer.current);
      clearTimeout(burstTimer.current);
      scanTimer.current = setTimeout(() => setScanning(false), 380);
      burstTimer.current = setTimeout(() => setBursting(false), 320);
    }
    onSelect();
  };

  useEffect(() => () => {
    clearTimeout(scanTimer.current);
    clearTimeout(burstTimer.current);
  }, []);

  const W = typeof width === 'number' ? width : 160;
  const H = 52;
  const cs = 8;
  const pad = 4;

  const cls = ["gsb-btn", selected && "selected", scanning && "scanning", bursting && "burst"]
    .filter(Boolean).join(" ");

  return (
    <button className={cls} type="button" onClick={handleClick} style={{ width }} {...buttonProps}>
      <svg
        className="gsb-frame"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect className="gsb-fill"         x="1"       y="1"       width={W - 2}             height={H - 2} />
        <rect className="gsb-border-outer" x="1"       y="1"       width={W - 2}             height={H - 2} />
        <rect className="gsb-border-inner" x={pad + 1} y={pad + 1} width={W - (pad + 1) * 2} height={H - (pad + 1) * 2} />
        <polygon className="gsb-corner" points={`1,1 ${1+cs},1 1,${1+cs}`} />
        <polygon className="gsb-corner" points={`${W-1},1 ${W-1-cs},1 ${W-1},${1+cs}`} />
        <polygon className="gsb-corner" points={`1,${H-1} ${1+cs},${H-1} 1,${H-1-cs}`} />
        <polygon className="gsb-corner" points={`${W-1},${H-1} ${W-1-cs},${H-1} ${W-1},${H-1-cs}`} />
        <polyline className="gsb-bracket" points={`${1+cs+16},1 1,1 1,${1+cs+16}`} />
        <polyline className="gsb-bracket" points={`${W-1-cs-16},1 ${W-1},1 ${W-1},${1+cs+16}`} />
        <polyline className="gsb-bracket" points={`${1+cs+16},${H-1} 1,${H-1} 1,${H-1-cs-16}`} />
        <polyline className="gsb-bracket" points={`${W-1-cs-16},${H-1} ${W-1},${H-1} ${W-1},${H-1-cs-16}`} />
        <line className="gsb-tick" x1="1"     y1={H/2} x2="7"     y2={H/2} />
        <line className="gsb-tick" x1={W-1}   y1={H/2} x2={W-7}   y2={H/2} />
        <line className="gsb-scan" x1="2"     y1={H/2} x2={W-2}   y2={H/2} />
        {showDiamond && (
          <g transform={`translate(22,${H/2})`}>
            <polygon className="gsb-diamond"    points="0,-7 6,0 0,7 -6,0" />
            <polygon className="gsb-diamond-in" points="0,-3.5 3,0 0,3.5 -3,0" />
          </g>
        )}
      </svg>
      <span style={{ position: "relative", zIndex: 1 }}>{label}</span>
    </button>
  );
}

export function GoldButtonGroup({ options, selected, onSelect }) {
  return (
    <div className="gsb-group">
      {options.map(opt => (
        <GoldButton
          key={opt.value}
          label={opt.label}
          selected={selected === opt.value}
          onSelect={() => onSelect(opt.value)}
          showDiamond={opt.diamond}
          width={opt.width || 160}
        />
      ))}
    </div>
  );
}

export default GoldButton;
