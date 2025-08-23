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

export const addPieceToOutfit = async (outfitId: string, pieceId: string): Promise<string> => {
  try {
    const res = await axios.post<string>(`http://localhost:3000/outfitPieces/`, {
      outfitId: outfitId,
      pieceId: pieceId,
    });

    if(!res.data) {
      console.warn("Missing Response!:");
      return '';
    }

    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return '';
  }
};

export const UpdatePieceOnOutfit = async (
  id: string,
  posx: number,
  posy: number,
  width: number,
  height: number,
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
