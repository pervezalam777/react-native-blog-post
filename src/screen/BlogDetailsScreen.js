import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import withBlogContext from "../context/withBlogContext";
import {FontAwesome} from '@expo/vector-icons'

const BlogDetailsScreen = ({navigation, blogState}) => {
    let id = navigation.getParam('id');
    let blogPost = blogState.find(blogPost => blogPost.id === id);

    return <View style={style.container}>
        <Text style={style.titleStyle}>{blogPost.title}</Text>
        <Text style={style.contentStyle}>{blogPost.content}</Text>
    </View>
}

const style  = StyleSheet.create({
    container:{
        flex: 1
    },
    titleStyle:{
        fontSize:18,
        marginBottom:10,
        marginHorizontal:5
    },
    contentStyle: {
        fontSize:15,
        marginBottom:5,
        marginHorizontal:5
    },
    headerIconStyle: {
        fontSize:30,
        marginRight:10
    }
})

const BlogDetailsScreenExtended = withBlogContext(BlogDetailsScreen)

BlogDetailsScreenExtended.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('EditBlog', 
                            {
                                id: navigation.getParam('id')
                            })
                    }
                >
                    <FontAwesome name='pencil' style={style.headerIconStyle}/>
                </TouchableOpacity>
            )
        }
    }
}

export default BlogDetailsScreenExtended