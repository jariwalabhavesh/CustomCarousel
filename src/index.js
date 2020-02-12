import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default class MovieHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
        <ScrollView
          ref={(ref) => { this.stepCarousel = ref }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          snapToAlignment={"center"}
          onContentSizeChange={this.setTotalPage}
          onMomentumScrollEnd={this.handleScrollEnd}
        >

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
