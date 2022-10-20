import client from "../database";

type Book = {
    id: number;
    title: string;
    total_pages: number;
    author: string;
    type: string;
    summary: string;
};
export class Books {
    async index(): Promise<Book[]> {
        try {
            const connection = await client.connect();
            const sql = "SELECT * FROM books";
            const result = await connection.query(sql);
            await connection.release();
            return result.rows;
        } catch (error) {
            throw new Error(`NO Table Were Found ${error}`);
        }
    }
    async show(id: number): Promise<Book> {
        try {
            const connection = await client.connect();
            const sql = "SELECT * FROM books WHERE id= ($1)";
            const result = await connection.query(sql, [id]);
            await connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`NO ROW HAS BEEN FOUND`);
        }
    }
    async create(book: Book): Promise<Book> {
        try {
            const connection = client.connect();
            const sql = `INSERT INTO books (title,total_pages,author,type,summary) VALUES ($1,$2,$3,$4,$5) RETURNING *`;
            title: string;
    total_pages: number;
    author: string;
    type: string;
    summary: string;
        } catch (error) {}
    }
}
