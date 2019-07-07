import {observable, action, configure, runInAction} from "mobx";
import axios from 'axios';

configure({
    enforceActions: 'observed'
});

class MenuStore {

    @observable menus = [];

    @action async getMenus(){
        try{
            const {data} = await axios.get("http://localhost:8888/project/public/api/menu?client_id=1");

            runInAction(() => {
                this.menus = data
            });

        } catch (e) {

        }
    }
}

export default new MenuStore()