# Blog Post
This is a sample application for blog post


## Server side
Please refer [blog-post-server](https://github.com/pervezalam777/blog-post-server) for local server side integration.

<br/>**NOTE** You would need to update baseURL: 'http://6c7158f7.ngrok.io' in jsonServer.js file. Instruction for this url provided in the blog-post-server repository.

## React Navigation Fix for v4
As react navigation v5 released with breaking changes, we are using stable version of v4

```bash
> npm install react-navigation

> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

> npm install react-navigation-stack @react-native-community/masked-view

# start app and clear cache with 
> npm start -c
```

### Error
If there is an error with the about solution try following

```bash
> rm -r node_module && rm package-lock.json

> expo upgrade

> npm start -c
```

