'use strict';

var React = require('react-native');

var TodoList = require('./TodoList');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var myReactNativeTodoListApp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TodoList />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
  },
});

AppRegistry.registerComponent('myReactNativeTodoListApp', () => myReactNativeTodoListApp);
