import { Pool } from 'pg';
import { DatabaseConnection } from '../db';
import IPiece from '../types/piece'

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