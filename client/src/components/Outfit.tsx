import { IOutfitPiece } from '../appTypes/outfit.types';
import { Rnd } from 'react-rnd';

const Outfit = ({ outfit }: { outfit: { title: string; outfitId: string; pieces: IOutfitPiece[] | undefined } }) => {
  return (
    <div
      className="w-full h-full border-[#443627] border-opacity-40 border-2 rounded-lg flex flex-col justify-start items-start bg-center bg-contain bg-no-repeat"
    >
      <div className="w-full text-center">Classic Outfit</div>
      {outfit.pieces?.map((outfitPiece) => (
        <Rnd
          default={{
            x: outfitPiece.posx,
            y: outfitPiece.posy,
            width: outfitPiece.width.toString() + 'px',
            height: outfitPiece.height.toString() + 'px',
          }}
          bounds={"parent"}
          lockAspectRatio={true}
        >
          <div className="border-[#443627] border-opacity-40 border-2 w-full h-full bg-[#F7F7F7]">
            <img src={outfitPiece.piece.img_link} alt={outfitPiece.piece.description} className="w-full h-full object-cover pointer-events-none" />
          </div>
        </Rnd>
      ))}
    </div>
  );
};

export default Outfit;
