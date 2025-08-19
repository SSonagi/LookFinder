export interface IPiece {
  id: string;
  title: string;
  description: string;
  price: string;
  shop: string;
  img_link: string;
  shop_link: string;
}

export interface IOutfit {
  id: string;
  user_id: string;
  title: string;
}

export interface IOutfitPiece {
  id: string;
  posx: number;
  posy: number;
  width: string;
  height: string;
  piece: IPiece;
}