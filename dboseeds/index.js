import "./seeds.js";
import Block from "./models/Block.js"
import BlockTransaction from "./models/BlockTransaction.js"

export default {
    UpSeed: (models) => {
        return Promise.all([
            Block(),
            BlockTransaction()
        ]);
    }
};