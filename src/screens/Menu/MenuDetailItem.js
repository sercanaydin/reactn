import React from 'react';
import {Body, Button, Left, List, ListItem, Right, Text, Thumbnail} from "native-base";

const MenuDetailItem = ({ item }) => (
    <ListItem thumbnail>
        <Left>
            <Thumbnail square source={{ uri: 'http://localhost:8888/project/public/product_images/' + item.image }} />
        </Left>
        <Body>
            <Text>{ item.name }</Text>
            <Text note numberOfLines={item.id}>{item.description}</Text>
        </Body>
        <Right>
            <Button transparent>
                <Text>Gör</Text>
            </Button>
        </Right>
    </ListItem>
);

export default MenuDetailItem;

