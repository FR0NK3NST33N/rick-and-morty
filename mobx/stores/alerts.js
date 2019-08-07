import { observable, toJS } from "mobx";
import userServerice from "../services/userService";
import { async } from "regenerator-runtime";

class AlertStore {
    @observable alerts;

    constructor() {
        this.alerts = [];
    }

    addAlert = async message => {
        this.alerts.push(message);
        setTimeout(() => {
            this.removeAlert(0);
        }, 4500);
    };

    removeAlert = async index => {
        this.alerts.splice(index, 1);
    };
}

export default AlertStore;
