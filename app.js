import Application from "./global_class/application.js";
Promise.all([
    Application.useController("../controllers/myCoin/index.js")
]).then(() => Application.start());

