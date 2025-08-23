import { Pool } from 'pg';
import { DatabaseConnection } from '../db';

export default class AuthService {
    private pool: Pool;

    constructor() {
        this.pool = DatabaseConnection.getInstance();
    }

    public async registerUser(email: string, password: string): Promise<any> {
        // TODO: Hash password before storing in production
        const client = await this.pool.connect();
        try {
            const result = await client.query(
                'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email;',
                [email, password]
            );
            return result.rows[0];
        } finally {
            client.release();
        }
    }

    public async signInUser(email: string, password: string): Promise<any> {
        const client = await this.pool.connect();
        try {
            const result = await client.query(
                'SELECT id, email FROM users WHERE email = $1 AND password = $2;',
                [email, password]
            );
            if (result.rows.length === 0) {
                throw new Error('Invalid credentials');
            }
            return result.rows[0];
        } finally {
            client.release();
        }
    }
}
