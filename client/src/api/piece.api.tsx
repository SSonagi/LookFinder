import axios from 'axios';
import { IPiece, IOutfitPiece, IOutfit } from '../appTypes/outfit.types';

export const getPieces = async (): Promise<IPiece[]> => {
  try {
    const res = await axios.get<IPiece[]>('http://localhost:3000/pieces');

    if(!res.data || !Array.isArray(res.data)) {
      console.warn("Unexpected response format:", res.data);
      return [];
    }

    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const getPiecesFromOutfit = async (
  outfitId: string,
): Promise<IOutfitPiece[]> => {
  try {
    const text = `http://localhost:3000/pieces/${outfitId}`;
    const res = await axios.get<IOutfitPiece[]>(text);

    if(!res.data || !Array.isArray(res.data)) {
      console.warn("Unexpected response format:", res.data);
      return [];
    }

    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const addPieceToOutfit = async (id: string, outfitId: string, pieceId: string) => {
  try {
    await axios.post<IOutfitPiece>(`http://localhost:3000/outfitPieces/`, {
      id: id,
      outfitId: outfitId,
      pieceId: pieceId,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const UpdatePieceOnOutfit = async (
  id: string,
  posx: number,
  posy: number,
  width: string,
  height: string,
) => {
  try {
    await axios.put<IOutfitPiece>(`http://localhost:3000/outfitPieces/`, {
      id: id,
      posx: posx,
      posy: posy,
      width: width,
      height: height,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const RemovePieceOnOutfit = async (outfitPieceid: string) => {
  try {
    await axios.delete<IOutfitPiece>(`http://localhost:3000/outfitPieces/${outfitPieceid}`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
