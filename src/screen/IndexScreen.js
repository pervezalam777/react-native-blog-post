import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import withBlogContext from "../context/withBlogContext";
import {Feather} from '@expo/vector-icons'

const IndexScreen = ({blogState, deleteBlogPost, navigation}) => {
    return <View style={style.container}>
        <FlatList 
            data={blogState}
            keyExtractor={post => post.id}
            renderItem={({item}) => {
                console.log('item..', item)
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('BlogDetails', {id:item.id})}>
                        <View style={style.listItemStyle}>
                            <Text style={style.listItemTextStyle}>{item.title}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name='trash' style={style.listItemIconStyle} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}



const style  = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:5
    },
    listItemStyle:{
        justifyContent:'space-between',
        flexDirection: 'row',
        paddingVertical: 20,
        borderColor:'gray',
        borderTopWidth: 1
    },
    listItemTextStyle:{
        fontSize:18,
        marginLeft: 15
    },
    listItemIconStyle:{
        fontSize:24,
        marginRight:15
    },
    headerIconStyle: {
        fontSize:30,
        marginRight:10
    }

})

const IndexScreenExtended = withBlogContext(IndexScreen)

IndexScreenExtended.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('AddBlog')}>
                <Feather name='plus' style={style.headerIconStyle} />
            </TouchableOpacity>
        )
    }
}

export default IndexScreenExtended