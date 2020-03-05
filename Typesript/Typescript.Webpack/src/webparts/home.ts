import { HomeProvider } from "../providers/HomeProviders";

export class HomeWebpart {

    private _provider = new HomeProvider();

    constructor() {
        this._provider.getLists().then(data => {
            console.log("Lists :", data);
            const p = document.getElementById("p_home_w");
            if (p)
                p.innerText = JSON.stringify(data);
        });
    }
}

(() => {
    new HomeWebpart();
})();