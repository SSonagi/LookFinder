import { Pool } from 'pg';
import { DatabaseConnection } from '../db';
import IOutfit from '../types/outfits'

export default class outfitService {
    private pool: Pool;
    public user_current: number

    constructor(_user: number) {
        this.pool = DatabaseConnection.getInstance();
        this.user_current = _user
    }
    
    public async getOutfits(): Promise<IOutfit[]> {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT * FROM outfits');
            return result.rows;
        } finally {
            client.release();
        }   
    }
}