import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";

export interface ISPList {
    id: string;
    title: string;
    hidden: boolean;
}

export class HomeProvider {
    constructor() {
        sp.setup({
            sp: {
                headers: {
                    Accept: "application/json;odata=verbose",
                }
            }
        });
    }

    public getLists(): Promise<ISPList[]> {
        return sp.web.lists.select("Id", "Title", "Hidden").get()
            .then(data => {
                let result: ISPList[] = [];
                result = data.map(item => {
                    const list: ISPList = {
                        id: item.Id,
                        title: item.Title,
                        hidden: item.Hidden
                    };
                    return list;
                });
                return result;
            });
    }

    public testPromise(): Promise<string> {
        const result = "Hello!";
        return new Promise(resolve => {
            setTimeout(_ => {
                resolve(result);
            }, 1000);
        });
    }
}