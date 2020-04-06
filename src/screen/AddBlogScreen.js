import React from 'react';
import {StyleSheet} from 'react-native';
import BlogForm from '../components/BlogForm'
import withBlogContext from "../context/withBlogContext";

const AddBlogScreen = ({addBlogPost, navigation}) => {

   return <>
        <BlogForm  
            initialValues={{title:'', content:''}}
            onSubmit={
                (title, content) => 
                    addBlogPost(title, content, () => navigation.pop())
            }
        />
    </>
}

const style  = StyleSheet.create({
    
})

const AddBlogScreenExtended = withBlogContext(AddBlogScreen)

export default AddBlogScreenExtended