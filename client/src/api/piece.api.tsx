import axios from 'axios';
import { IPiece, IOutfitPiece } from '../appTypes/outfit.types';

export const getPieces = async (): Promise<IPiece[] | undefined> => {
  try {
    const res = await axios.get<IPiece[]>('http://localhost:3000/pieces');
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getPiecesFromOutfit = async (outfitId: string): Promise<IOutfitPiece[] | undefined> => {
  try {
    const text = `http://localhost:3000/pieces/${outfitId}`;
    console.log(text);
    const res = await axios.get<IOutfitPiece[]>(text);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const addPieceToOutfit = async ( id: string, outfitId: string, pieceId: string) => {
  try {
    await axios.post<IOutfitPiece>(`http://localhost:3000/outfitPieces/`, {
      id: id,
      outfitId: outfitId,
      pieceId: pieceId
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const UpdatePieceOnOutfit = async ( id: string, posx: number, posy: number, width: number, height: number) => {
  try {
    await axios.put<IOutfitPiece>(`http://localhost:3000/outfitPieces/`, {
      id: id,
      posx: posx,
      posy: posy,
      width: width,
      height: height
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const RemovePieceOnOutfit = async ( outfitPieceid: string ) => {
  try {
    await axios.delete<IOutfitPiece>(`http://localhost:3000/outfitPieces/${outfitPieceid}`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
