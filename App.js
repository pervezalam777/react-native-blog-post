import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screen/IndexScreen';
import AddBlogScreen from './src/screen/AddBlogScreen';
import EditBlogScreen from './src/screen/EditBlogScreen';
import BlogDetailsScreen from './src/screen/BlogDetailsScreen';
import {Provider} from './src/context/BlogContext'

const navigator = createStackNavigator({
  Index:IndexScreen,
  AddBlog:AddBlogScreen,
  EditBlog:EditBlogScreen,
  BlogDetails:BlogDetailsScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blog'
  }
})

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
    <App />
  </Provider>
}