import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default class Home extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return(
            <SafeAreaView>
                <View>
                    <Text>Anasayfa</Text>
                    <Button
                        title="Menüyü getir"
                        onPress={() => navigate('Menu')}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({});