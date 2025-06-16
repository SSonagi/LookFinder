import axios from 'axios';
import { IPiece } from '../appTypes/outfit.types';

export const getPieces = async (): Promise<IPiece[] | undefined> => {
  try {
    const res = await axios.get<IPiece[]>('http://localhost:3000/pieces');
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
