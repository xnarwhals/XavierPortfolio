import './index.scss';
import { useDrag } from "react-dnd";

function Cartridge({ game }) {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "CARTRIDGE",
        item: game,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={dragRef}
            style={{
                opacity: isDragging ? 0 : 1,
                cursor: "move",
            }}
            className="cartridge"
        >
            <img src={game.image} alt={game.id} />
        </div>
    
    )
}

export default Cartridge
