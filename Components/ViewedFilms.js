// Components/Test.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class ViewedFilms extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text>Ici les films vus</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation_view: {
    backgroundColor: 'red',
    width: 100,
    height: 100
  }
})

export default ViewedFilms
