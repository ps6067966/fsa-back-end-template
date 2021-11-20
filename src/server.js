import express from "express";
import {routes} from './routes';
import {db} from './db';

const app = express();
app.use(express.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
})

const start = async () => {

    try {
        await db.connect('mongodb://localhost:27017');
        await app.listen(8080, () => {
            console.log('Server is running on port 8080');
        })
    } catch (e) {
        console.error(e);
    }
}

start();
