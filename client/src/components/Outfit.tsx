import { Rnd } from "react-rnd";
import { getPiecesFromOutfit } from "../api/piece.api";
import Piece from "./Piece";
import { useEffect, useRef, useState } from "react";
import { IOutfitPiece } from "../appTypes/outfit.types";

const Outfit = ({
    title,
    outfitId
} : {
    title: string,
    outfitId: string
}) => {
    const hasRun = useRef(false);
    const [pieces, setPieces] = useState<IOutfitPiece[]>([]);
    
    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        const fetchPieces = async () => {
            const fetchedPieces = await getPiecesFromOutfit(outfitId);
            setPieces(fetchedPieces);
        };

        fetchPieces();
    }, [outfitId]);

    return (
        <div className="left w-60 min-w-60 h-[33rem]">
            <div className="w-full h-full border-[#443627] border-opacity-40 border-2 rounded-lg flex flex-col justify-start items-start">
                <div className="w-full text-center">{title}</div>
                {pieces.map((outfitPiece) => (
                    <Rnd
                        key={outfitPiece.id}
                        default={{
                            x: outfitPiece.posx,
                            y: outfitPiece.posy,
                            width: outfitPiece.width,
                            height: outfitPiece.height,
                        }}
                        disableDragging={true}
                        enableResizing= {false}
                        lockAspectRatio={true}
                    >
                        <Piece piece={outfitPiece.piece} />
                    </Rnd>
                ))}
            </div>
        </div>
    );
}

export default Outfit;
