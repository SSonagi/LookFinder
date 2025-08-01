import { Pool } from 'pg';
import { DatabaseConnection } from '../db';

export default class outfitService {
    private pool: Pool;

    constructor() {
        this.pool = DatabaseConnection.getInstance();
    }

    public async addPieceToOutfit( id: string, outfitId: string, pieceId: string ) {
        const client = await this.pool.connect();
        try {
            await client.query(
                `INSERT INTO outfitPieces ( id, outfit_id, piece_id, posx, posy, width, height )
                    VALUES ($1, $2, $3, 0, 0, 20, 20 )
                `, [id, outfitId, pieceId]
            );
        } finally {
            client.release();
        }   
    }

    public async updatePieceOnOutfit( id: string, posx: number, posy: number, width: string, height: string ) {
        const client = await this.pool.connect();
        try {
            await client.query(
                `UPDATE outfitpieces
                    SET posx = $2,
                        posy = $3,
                        width = $4,
                        height = $5
                    WHERE id = $1;
                `, [id, posx, posy, width, height]
            );
            console.log("Done!!!!");
        } finally {
            client.release();
        }   
    }

    public async removePieceOnOutfit( id: string ) {
        const client = await this.pool.connect();
        try {
            await client.query(
                `DELTE FROM outfitpieces
                    WHERE id = $1;
                `, [id]
            );
        } finally {
            client.release();
        }   
    }
}