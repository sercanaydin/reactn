import {observable, action, configure, runInAction} from "mobx";
import axios from 'axios';

configure({
    enforceActions: 'observed'
});

class ProductStore {

    @observable products = [];

    @observable categoryId = 0;

    @observable loading = false;

    @action async getProducts(){
        this.loading = true;

        try{
            const {data} = await axios.get("http://localhost:8888/project/public/api/product/" + this.categoryId);

            runInAction(() => {
                this.products = data;
                this.loading = false;
            });

        } catch (e) {

        }
    }
}

export default new ProductStore()