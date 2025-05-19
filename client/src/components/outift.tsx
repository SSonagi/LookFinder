import { IOutfit, IPiece } from '../appTypes/outfit.types';

const Outfit = ({outfit}: {outfit: IOutfit}) => {
    return (
        <div className='w-full h-full border-2'>
            <div>
                {outfit.id}
            </div>
        </div>
    );
}

export default Outfit;