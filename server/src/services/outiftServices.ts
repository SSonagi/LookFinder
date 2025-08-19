import { Pool } from 'pg';
import { DatabaseConnection } from '../db';
import { IOutfit } from '../types/outfits';

export default class outfitService {
    private pool: Pool;
    public user_current: number

    constructor(_user: number) {
        this.pool = DatabaseConnection.getInstance();
        this.user_current = _user
    }

    public async getOutfitTitle( id: String ): Promise<string | null> {
            const client = await this.pool.connect();
            try {
                const result = await client.query(`SELECT title FROM outfits WHERE outfits.id = $1;`, [id]);
                if (result.rows.length > 0) {
                    return result.rows[0].title;
                } else {
                    return "";
                }
            } finally {
                client.release();
            }
        }
    
    public async getUserOutfits( userId: string ): Promise<IOutfit[]> {
        const client = await this.pool.connect();
        try {
            const result = await client.query(`SELECT * FROM outfits WHERE outfits.user_id = $1;`, [userId]);
            return result.rows;
        } finally {
            client.release();
        }   
    }

    public async updateOutfitTitle( id: string, title: string ) {
        const client = await this.pool.connect();
        try {
            await client.query(`UPDATE outfits SET title = $2 WHERE id = $1;`, [id, title]);
        } finally {
            client.release();
        }   
    }

    public async addOutfit( id: string, title: string, userId: string ) {
        const client = await this.pool.connect();
        try {
            await client.query(
                `INSERT INTO outfits ( id, title, user_id )
                    VALUES ($1, $2, $3  )
                `, [id, title, userId]
            );
        } finally {
            client.release();
        }  
    } 
}