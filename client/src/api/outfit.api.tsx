import axios from "axios";
import { IOutfit } from "../appTypes/outfit.types";

export const getUserOutfits = async (
  userId: string,
): Promise<IOutfit[]> => {
  try {
    const text = `http://localhost:3000/outfit/user/${userId}`;
    const res = await axios.get<IOutfit[]>(text);

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

export const getOutfitTitle = async (
  userId: string,
): Promise<string> => {
  try {
    const text = `http://localhost:3000/outfit/title/${userId}`;
    const res = await axios.get<string>(text);

    if(!res.data) {
      console.warn("Unexpected response format:", res.data);
      return "";
    }
    
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return "";
  }
};

export const updateOutfitTitle = async (
    id: string,
    title: string
) => {
    try {
        const text = `http://localhost:3000/outfit/title`;
        await axios.put(text, { id, title });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const addNewOutfit = async (userId: string): Promise<string> => {
  try {
    const res = await axios.post<string>(`http://localhost:3000/outfit/`, {
      userId: userId
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