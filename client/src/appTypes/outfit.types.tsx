export interface IPiece {
  id: string,
  description: string,
  img_link: string,
  shop_link: string,
}

export interface IOutfit {
  id: string,
  head: IPiece[],
  top: IPiece[],
  bottom: IPiece[],
  shoe: IPiece[],
}