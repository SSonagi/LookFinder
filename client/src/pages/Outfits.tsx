import { useEffect, useRef, useState } from 'react';
import Outfit from '../components/Outfit';
import { IOutfit, IOutfitPiece } from '../appTypes/outfit.types';
import { useParams } from 'react-router-dom';
import { getUserOutfits } from '../api/outfit.api';

const Outfits = () => {
  const hasRun = useRef(false);
  
  const { userId } = useParams<{ userId: string }>();
  const [ outfits, setOutfits ] = useState<IOutfit[]>([]);

  useEffect(() => {
    
    if (hasRun.current) return;
    hasRun.current = true;

    const fetchOutfits = async () => {
      if (!userId) {
        return <div>Error: outfit ID is required</div>;
      }
      setOutfits(await getUserOutfits(userId));
    };

    fetchOutfits();
  }, []);

  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="text-2xl p-5">Your Outfits</h1>
      <div className="flex flex-row justify-center w-full gap-10">
        <div className="left w-60 min-w-60 h-[33rem]">
          <div className="w-full h-full border-[#443627] border-opacity-40 border-2 rounded-lg flex flex-col justify-center items-center">
            <div className="w-full text-center">New Outfit</div>
            <div className='text-2xl'>+</div>
          </div>
        </div>
        {outfits.map((outfit) => 
          <a href={`/builder/${outfit.id}`}>
            <Outfit key={outfit.id} title={outfit.title} outfitId={outfit.id}/>
          </a>
        )}
      </div>
      </div>
    );
};

export default Outfits;
