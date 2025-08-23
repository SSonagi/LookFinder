import { Pool } from 'pg';
import { DatabaseConnection } from '../db';

export default class UserService {
    private pool: Pool;

    constructor() {
        this.pool = DatabaseConnection.getInstance();
    }

    public async getAllUsers(): Promise<any[]> {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT id, email FROM users;');
            return result.rows;
        } finally {
            client.release();
        }
    }
}