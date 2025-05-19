import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Outfit from '../components/outift';
import { IOutfit, IPiece } from '../appTypes/outfit.types';

const Builder = () => {
  const [outfit, setOutfit] = useState<IOutfit>({
    id: uuidv4(),
    head: [],
    top: [],
    bottom: [],
    shoe: []
  }); 

  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="">Outfit Builder</h1>
      <div className="flex flex-row justify-center">
        <div className="left w-60 h-[30rem]">
          <Outfit outfit={outfit} />
        </div>
        <div className="right">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};  

export default Builder;
