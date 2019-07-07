import React, { Component } from 'react';
import { StyleSheet, FlatList} from 'react-native';

import { Content, List, Spinner } from 'native-base';

import {observer, inject} from 'mobx-react';

import MenuItem from './MenuItem';

@inject('MenuStore')
@observer
export default class Menu extends Component {

    componentDidMount(){
        this.props.MenuStore.getMenus()
    }

    render() {
        const { MenuStore } = this.props;

        return(
            <Content>
                <List>
                    <FlatList
                        data={MenuStore.menus}
                        renderItem={({item}) => <MenuItem item={item}/>}
                    />
                </List>
            </Content>
        );
    }
}

const styles = StyleSheet.create({});