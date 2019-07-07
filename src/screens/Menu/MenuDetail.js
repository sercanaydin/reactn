import React, { Component } from 'react';
import {Content, Body, Button, Left, List, ListItem, Right, Text, Thumbnail, Spinner} from "native-base";
import {inject, observer} from "mobx-react";
import {FlatList} from "react-native";
import MenuDetailItem from "./MenuDetailItem";

@inject('ProductStore')
@observer

export default class MenuDetail extends Component {

    constructor(props) {
        super(props);
        this.item = props.navigation.getParam('item');
        this.props.ProductStore.categoryId = this.item.id;
    }

    componentDidMount(){
        this.props.ProductStore.getProducts()
    }


    render() {
        const { ProductStore } = this.props;

        return(
            <Content>
                { ProductStore.loading && <Spinner size={"large"}></Spinner>}
                <List>
                    { 
                    ProductStore.loading == false ?
                    <FlatList
                        data={ProductStore.products}
                        renderItem={({item}) => <MenuDetailItem item={item}/>}
                    /> 
                    : null 
                    }
                </List>
            </Content>
        );
    }
}

