import UserStore from "./users";
import AlertStore from "./alerts";

class AppStore {
    constructor() {
        this.userStore = new UserStore(this);
        this.alertStore = new AlertStore(this);
    }
}

export default AppStore;
