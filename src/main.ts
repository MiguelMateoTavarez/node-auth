import { Server } from "./presentation/server";

async function main(){
    //todo: await database
    //todo: server startup
    new Server({
        
    }).start();
}


(() => {
    main();
})();