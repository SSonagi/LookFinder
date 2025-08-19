import { Pool } from 'pg';
import { DatabaseConnection } from '../db';
import { IOutfitPiece, IPiece } from '../types/outfits';

export default class outfitService {
    private pool: Pool;
    public user_current: number

    constructor(_user: number) {
        this.pool = DatabaseConnection.getInstance();
        this.user_current = _user
    }
    
    public async getPieces(): Promise<IPiece[]> {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT * FROM pieces');
            return result.rows;
        } finally {
            client.release();
        }   
    }

    public async getPiecesFromOutfit( id: String ): Promise<IOutfitPiece[]> {
        const client = await this.pool.connect();
        try {
            const result = await client.query(
                `SELECT 
                    op.id,
                    op.posx,
                    op.posy,
                    op.width,
                    op.height,
                    json_build_object(
                        'id', p.id,
                        'title', p.title,
                        'description', p.description,
                        'price', p.price,
                        'shop', p.shop,
                        'img_link', p.img_link,
                        'shop_link', p.shop_link
                    ) AS piece
                    FROM outfitpieces op
                    JOIN pieces p ON op.piece_id = p.id
                    WHERE op.outfit_id = $1`,
                [id]
            );
            return result.rows;
        } finally {
            client.release();
        }
    }

    public async addPiece( piece: IPiece ) {
        const keys = Object.keys(piece);
        const values = Object.values(piece);

        // Generate placeholders like $1, $2, ..., $n
        const placeholders = keys.map((_, i) => `$${i + 1}`).join(', ');

        const query = `
            INSERT INTO pieces (${keys.join(', ')})
            VALUES (${placeholders})
            RETURNING *
        `;

        const client = await this.pool.connect();
        try {
            const result = await client.query(query, values);
            return result.rows[0]; // return the inserted row
        } finally {
            client.release();
        }   
    }
}