import { IOutfit, IPiece } from '../appTypes/outfit.types';
import Piece from './Piece';
import OutlineImg from '../images/Outline.png';

const Outfit = ({ outfit }: { outfit: IOutfit }) => {
  return (
    <div
      className="w-full h-full border-[#443627] border-opacity-40 border-2 rounded-lg flex flex-col justify-start items-start bg-center bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${OutlineImg})` }}
    >
      <div className="w-full text-center">Classic Outfit</div>
      {(
        [
          ['Head', outfit.head, false],
          ['Top', outfit.top, true],
          ['Bottom', outfit.bottom, true],
          ['Shoe', outfit.shoe, false],
        ] as [string, IPiece[], boolean][]
      ).map(([position, data, double]) => (
        <div key={position} className="w-full">
          <div className="text-sm px-1 bg-primary w-min rounded-md border-2 text-[#F7F7F7]">
            {position}
          </div>
          <div
            className={
              'w-full flex flex-row flex-wrap justify-center items-center gap-3 ' +
              (double ? 'h-32' : 'h-16')
            }
          >
            {data.slice(0, double ? 6 : 3).map((piece) => (
              <Piece key={piece.id} piece={piece} />
            ))}
            {data.length > (double ? 6 : 3) && <div>...</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Outfit;
