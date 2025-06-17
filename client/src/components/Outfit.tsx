import { IOutfit, IPiece } from '../appTypes/outfit.types';
import { Rnd } from 'react-rnd';

const Outfit = ({ outfit }: { outfit: IOutfit }) => {
  return (
    <div
      className="w-full h-full border-[#443627] border-opacity-40 border-2 rounded-lg flex flex-col justify-start items-start bg-center bg-contain bg-no-repeat"
    >
      <div className="w-full text-center">Classic Outfit</div>
      {outfit.pieces.map((piece) => (
        <Rnd
          default={{
            x: 10,
            y: 10,
            width: '100px',
            height: '',
          }}
          bounds={"parent"}
          lockAspectRatio={true}
        >
          <div className="border-[#443627] border-opacity-40 border-2 w-full h-full bg-[#F7F7F7]">
            <img src={piece.img_link} alt={piece.description} className="w-full h-full object-cover pointer-events-none" />
          </div>
        </Rnd>
      ))}
    </div>
  );
};

export default Outfit;
