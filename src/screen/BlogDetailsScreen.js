import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import withBlogContext from "../context/withBlogContext";
import {FontAwesome} from '@expo/vector-icons'

const BlogDetailsScreen = ({navigation, blogState}) => {
    let id = navigation.getParam('id');
    let blogPost = blogState.find(blogPost => blogPost.id === id);

    return <View style={style.container}>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}

const style  = StyleSheet.create({
    container:{
        flex: 1
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
                    <FontAwesome name='pencil' size={30}/>
                </TouchableOpacity>
            )
        }
    }
}

export default BlogDetailsScreenExtended