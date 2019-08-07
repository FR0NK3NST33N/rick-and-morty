import { observable, action, toJS } from "mobx";
import userServerice from "../services/userService";

class UserStore {
    @observable users = { results: [] };
    @observable user = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    getAll = async () => {
        this.users = await userServerice.getAll();
    };

    search = async search => {
        if (search == "") {
            await this.getAll();
            return;
        }
        this.users.results = await this.users.results.filter(user => {
            return search == user.name;
        });
    };
}

export default UserStore;
