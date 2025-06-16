import IPiece from './piece';

export default interface IOutfit {
    id: string;
    head: IPiece[];
    top: IPiece[];
    bottom: IPiece[];
    shoe: IPiece[];
}