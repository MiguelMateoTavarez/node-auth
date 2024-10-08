import { Server } from "./presentation/server";
import { envs } from './config/envs';
import { AppRoutes } from "./presentation/appRoutes";

async function main(){
    //todo: await database
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    }).start();
}


(() => {
    main();
})();