import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import AmazonImg from '../images/Amazon.png';
import { IOutfit, IPiece } from "../appTypes/outfit.types";

const Modal = ({ id, dispatch }: { id: string, dispatch: any }) => {
    const [pieces, setPieces] = useState([
        {
            id: uuidv4(),
            title: 'Flexfit Unisex Wooly Combed Twill Cap - 6277',
            description: 'Hat',
            price: '$17.99 - $28.99',
            shop: 'amazon',
            img_link: 'https://m.media-amazon.com/images/I/61pSuZP7SVL._AC_SX679_.jpg',
            shop_link:
            'https://www.amazon.ca/Flexfit-Unisex-Wooly-Combed-Twill/dp/B07LB9LVGX?th=1&psc=1',
        },
        {
            id: uuidv4(),
            title: 'TACVASEN Men\'s Bomber Jacket Lightweight Casual Spring Fall Windbreaker Zip Up Coat',
            description: 'Jacket',
            price: '$51.28',
            shop: 'amazon',
            img_link: 'https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SX679_.jpg',
            shop_link:
            'https://www.amazon.ca/TACVASEN-Jacket-Lightweight-Sportwear-Softshell-Outwear/dp/B07VKDJQJP',
        },
        {
            id: uuidv4(),
            title: ' Amazon Essentials Men\'s Standard Lightweight Jersey Pullover Hoodie ',
            description: 'Hoodie',
            price: '$26.60',
            shop: 'amazon',
            img_link: 'https://m.media-amazon.com/images/I/91478oc25BL._AC_SX679_.jpg',
            shop_link:
            'https://www.amazon.ca/Amazon-Essentials-Standard-Lightweight-Pullover/dp/B07YF3SP9P?crid=1ZUKTKAAIQ7EW&dib=eyJ2IjoiMSJ9.Xume15xqRGHTbqNuHLpv0YT19InZhjUcRh9CfwmRns86hz_fJP85mhLagycNqt1CKFAN6zp7JWgTPeBGDitP_vX8ixocwhZaUJRBONIkhYlgpJJ9bS_YiINgjPXtn5mGyXbKXEKZoY-CJl3Iy5pWrx5UM_5TbFXfKyUMohiARxjvd35DasQNZYEVTPGeT3oM6J1mMJXp2gGpo4Iuu4tJK33kQh3bKsVc4H7qF0UfcrPbFIkD8sfXRjmpJA0ssPSXFquPw3I6pOIA2Y2JXl1AFozp4fOi-0ELBqJHt5oMyr4.Q09-OTA2wotOcqU2KulTwFtA5RWsJD3ad0HLfUBKHCY&dib_tag=se&keywords=grey%2Bhoodie&qid=1749235679&sprefix=grey%2Bhoodi%2Caps%2C104&sr=8-14&th=1&psc=1',
        },
        {
            id: uuidv4(),
            title: 'Russell Athletic mens Short Sleeve Performance T-shirt',
            description: 'Shirt',
            price: '$19.31',
            shop: 'amazon',
            img_link: 'https://m.media-amazon.com/images/I/51U2Gu+HdZL._AC_SX679_.jpg',
            shop_link:
            'https://www.amazon.ca/Russell-Athletic-Sleeve-Performance-T-Shirt/dp/B00MOUQF26?crid=2675M4PRKBBN8&dib=eyJ2IjoiMSJ9.Wt4FDve88Fbo23m_C33eRH0AEyaO15AsApQYnmQy1ywLmTMOevPGbGk1D0XKQ8sFNJHYYnkhg9XCXBKrM6jab9qszmSeAjCRHbdXl28moZvzboTIaQq4AYdYNMXyrQsbjF6RZZP8drEBWn53_J6TjDWX8rDIHQc0THCKV5MMJOJ-yEbBZg0uNyRMdXmrt66fWJOoNtrvAuNOYJdLMwxdo2L0XxGLZoC32BH-QInhaeQVLEzU7fQaKaKRy4uXCkNoGYA1UCmpXMFAuLvKkyAG-qK063iPqSILx0sYY77NQFg.8OyZpZcPcaBuXXnX9mO4dVI0gl0WNprDg0xDJLn-80M&dib_tag=se&keywords=white%2Btshirt%2B1%2Bmen&qid=1749235774&sprefix=white%2Btshirt%2B1%2Bme%2Caps%2C125&sr=8-5&th=1&psc=1',
        },
        {
            id: uuidv4(),
            title: 'Wrangler Mens Relaxed Fit Stretch Cargo Pant',
            description: 'Pant',
            price: '$43.57',
            shop: 'amazon',
            img_link: 'https://m.media-amazon.com/images/I/71jpUDOkZUL._AC_SX466_.jpg',
            shop_link:
            'https://www.amazon.ca/Wrangler-Authentics-Stretch-Cargo-Black/dp/B088851X11?dib=eyJ2IjoiMSJ9.WWNVVa2BWVaKqAmapbN-dZ98wqtwOt-V7cthXhMhFfEtKIraZi3FOFbsnlFF5CaYHwBeJHJ0wH1M7qzEzMoiRzSmOIJbAgWndzjaS4Kt-iRaVi1akSf60HCpVbmNFdp5LhQ5oeBbeh-z7uI7bLZfb5IwGRdPQo5Um9ODuKcOozZxsTev0J1RYPdAs8oXIiZmHiD0fCjC82gSXwSHmspns6oUcYhptzkTWMlPs_Fpkek6g5dNeD09SoBErA0umUZT9NDz_aQwkDdtT8o5RrH98pm41E3dHgv5INY5q1oRnss.9VA3yUm5mm0r4sa5zfI8P7MHQdym20o2A6mY_LN3feM&dib_tag=se&keywords=cargo+pants&qid=1749235844&sr=8-5',
        },
        {
            id: uuidv4(),
            title: 'Bruno Marc Men\'s Casual Fashion Sneakers Leather Skate Shoes',
            description: 'Shoe',
            price: '$56.49',
            shop: 'amazon',
            img_link: 'https://m.media-amazon.com/images/I/71+v9AakCsL._AC_SY625_.jpg',
            shop_link:
            'https://www.amazon.ca/Bruno-Marc-Fashion-Sneakers-SBFS223M/dp/B09QM5R8K8?crid=DCL90TT1OC5J&dib=eyJ2IjoiMSJ9.J7r-oBVw7qdKnLWptxSkJjFu2cC97aWfQUxKwBlmq-cs-m2t7OUEewMc96c74WIkpRJUfzHq2RWYXokdVP21lhVH-YMMxUnFV2QguTgpWdYxozARb2BUzw7o9WzHDB7MKCEAfeR4ecVg0SE8KHbiFuwNhxgGx9sVMc7kmIKpsQ7zVWStJhci6llu7Oa3tqypdlDtOC74ojkrZvItqCBodrjHEw07dm4R5v2CTZ04PvHQF7Cb5ujzLko1yGR6G7ENAbUwfN1gjU6lLMaJGwM4FQ3erg79PLjrznH9CnD2p8M.VNpg_719d5DM4jYoXig5LK-Te4IwlujRMHmT4_hUR4U&dib_tag=se&keywords=Bruno%2BMarc%2BMen%27s%2BCasual%2BDress%2BSneakers%2BFashion%2BOxfords%2BSkate%2BShoes%2Bfor%2BMen&qid=1749235909&sprefix=bruno%2Bmarc%2Bmen%27s%2Bcasual%2Bdress%2Bsneakers%2Bfashion%2Boxfords%2Bskate%2Bshoes%2Bfor%2Bmen%2Caps%2C211&sr=8-8&th=1&psc=1',
        }
    ])

    const getShopLogo = (shop: string) => {
        switch (shop) {
            case 'amazon': {
                return AmazonImg;
            }
            default: {
                console.log('Non-existant shop');
            }
        }
    };

    return (
        <div className="modal" role="dialog">
            <div className="modal-box max-w-[53rem]">
                <div className="overflow-y-auto h-[30.5rem]">
                    <table className="table table-md">
                        {/* head */}
                        <thead className="sticky top-0 bg-base-100 z-10">
                            <tr className="shadow-md">
                            <th>Type</th>
                            <th>Selection</th>
                            <th>Price</th>
                            <th>Store</th>
                            <th></th>
                            </tr>
                        </thead>
                        {pieces.map((piece) => (
                            <tbody key={piece.id}>
                                <tr className="border-b-2 border-[#443627]/10">
                                    <th>
                                        <label>{piece.description}</label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="border-[#443627] border-opacity-40 border-2 h-12 w-12">
                                                    <img src={piece.img_link} alt={piece.description} />
                                                </div>
                                            </div>
                                            <div className="font-bold max-w-80 overflow-hidden w-80 leading-5">{piece.title}</div>
                                        </div>
                                    </td>
                                    <td>{piece.price}</td>
                                    <td>
                                        <img src={getShopLogo(piece.shop)} alt="Shop" className="w-16 pt-1" />
                                    </td>
                                    <th>
                                        <div className="dropdown dropdown-left dropdown-center">
                                            <div tabIndex={0} role="button" className="btn btn-secondary btn-xs w-16">Add</div>
                                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-2 p-0 shadow-md">
                                                <li><a className="w-16 font-normal text-xs border-b-2" onClick={() => dispatch({ type: "ADD_HEAD", piece: piece})}>Head</a></li>
                                                <li><a className="w-16 font-normal text-xs border-b-2" onClick={() => dispatch({ type: "ADD_TOP", piece: piece})}>Top</a></li>
                                                <li><a className="w-16 font-normal text-xs border-b-2" onClick={() => dispatch({ type: "ADD_BOTTOM", piece: piece})}>Bottom</a></li>
                                                <li><a className="w-16 font-normal text-xs border-b-2" onClick={() => dispatch({ type: "ADD_SHOE", piece: piece})}>Shoe</a></li>
                                            </ul>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                    <div className="text-sm p-1">
                        End of List
                    </div>
                </div>
            </div>
            <label className="modal-backdrop" htmlFor={id}>Close</label>
        </div>
    );
};

export default Modal;