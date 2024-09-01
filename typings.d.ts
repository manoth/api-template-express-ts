import { Connection } from './src/configs/connection';

declare global {
    namespace Express {
        export interface Request {
            conn: Connection;
        }
    }
}