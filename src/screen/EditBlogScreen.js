import React from 'react';
import {StyleSheet} from 'react-native';
import BlogForm from '../components/BlogForm'
import withBlogContext from "../context/withBlogContext";

const EditBlogScreen = ({blogState, updateBlogPost, navigation}) => {
    let id = navigation.getParam('id');
    let blogPost = blogState.find(post => post.id === id);
    return <>
        <BlogForm  
            initialValues={{title:blogPost.title, content:blogPost.content}}
            onSubmit={
                (title, content) => 
                updateBlogPost(id, title, content, () => navigation.pop())
            }
        />
    </>
}

const style  = StyleSheet.create({
})

const EditBlogScreenExtended = withBlogContext(EditBlogScreen)

export default EditBlogScreenExtended