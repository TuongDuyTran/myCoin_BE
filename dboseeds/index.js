import "./seeds.js";
import VNGTaskAction from "./vng/TaskAction.js"

export default {
    UpSeed: (models) => {
        return Promise.all([
            VNGTaskAction(),
        ]);
    }
};