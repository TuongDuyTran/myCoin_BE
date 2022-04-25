import { Router } from 'express';
import { validate, handler } from "../../middleware/controller.js";
import { express } from '../../global_class/application.js';

let routes = Router();

routes.get('/test', (req, res) => {
    res.send("successfully!");
});

express.use('/api/my-coin', routes);
