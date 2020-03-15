import React, { Component } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import { cardPerSlide } from './config'
import CarouselSlide from './components/Slide'
import movies from './data'

export default class MovieHome extends Component {
  render() {
    const noOfSlides = Math.ceil(movies.length / cardPerSlide)
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarTitle}>MOVIES</Text>
        </View>
        <ScrollView
          ref={(ref) => { this.stepCarousel = ref }}
          contentContainerStyle={styles.scrollViewContainerStyle}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          snapToAlignment={'center'}
          onContentSizeChange={this.setTotalPage}
          onMomentumScrollEnd={this.handleScrollEnd}
        >
          {[...Array(noOfSlides)].map((e, i) => {
            const startIndex = i + 1
            const startPosition = ((startIndex + (startIndex - 1)) - 1)
            const endPosition = (startIndex * 2)
            return <CarouselSlide key={i} cards={movies.slice(startPosition, endPosition)} />
          })}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Prev</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
