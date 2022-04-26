import Application from "./global_class/application.js";
Promise.all([
    Application.useController("../controllers/myCoin/index.js"),
    Application.useController("../controllers/ModuleControl/index.js"),
]).then(() => Application.start());

