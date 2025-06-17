export interface IPiece {
  id: string;
  title: string;
  description: string;
  price: string;
  shop: string;
  img_link: string;
  shop_link: string;
  pos: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  }
}

export interface IOutfit {
  id: string;
  pieces: IPiece[];
}
