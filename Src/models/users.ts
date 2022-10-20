import client from "./../database";

export type User = {
    id: number;
    first_name: string;
    phone_number: number;
};

export class Users {
    async index(): Promise<User[]> {
        try {
            const connection = await client.connect();
            const sql = "SELECT * FROM users;";
            const result = await connection.query(sql);
            await connection.release();
            console.log(result.rows);
            return result.rows;
        } catch (error) {
            throw new Error(`NO Table Were Found ${error}`);
        }
    }
}
