import "./seeds.js";
import Block from "./models/Block.js"
import Transaction from "./models/Transaction.js"

export default {
    UpSeed: (models) => {
        return Promise.all([
            Block(),
            Transaction()
        ]);
    }
};