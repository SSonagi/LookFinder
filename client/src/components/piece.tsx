import { IPiece } from '../appTypes/outfit.types';

const Piece = ({ piece }: { piece: IPiece }) => {
  return (
    <div className="border-[#443627] border-opacity-40 border-2 w-full h-full bg-[#F7F7F7]">
      <img
        src={piece.img_link}
        alt={piece.description}
        className="w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
};

export default Piece;
