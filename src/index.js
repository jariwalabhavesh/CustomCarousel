import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import styles from './style'
import { cardPerSlide } from './config'
import CarouselSlide from './components/Slide'
import movies from './data'

const { width: screenWidth } = Dimensions.get('window')

export default class MovieHome extends Component {

  constructor(props) {
    super(props)

    this.state = {
      totalSlide: 0,
      currentSlide: 1
    }
  }

  onNext = () => {

  }

  onPrev = () => {

  }

  setTotalSlides = (contentWidth) => {
    const { totalSlide } = this.state
    if (contentWidth !== 0) {
      const approxSlide = contentWidth / screenWidth
      if (totalSlide !== parseInt(approxSlide)) {
        this.setState({
          totalSlide: parseInt(Math.ceil(approxSlide.toFixed(2)))
        })
      }
    }
  }

  setCurrentSlide = (currentSlide) => {
    this.setState({
      currentSlide
    })
  }


  handleScrollEnd = (e) => {
    if (!e) {
      return
    }
    const { nativeEvent } = e
    if (nativeEvent && nativeEvent.contentOffset) {
      let currentSlide = 1
      if (nativeEvent.contentOffset.x === 0) {
        this.setCurrentSlide(currentSlide)
      } else {
        const approxCurrentSlide = nativeEvent.contentOffset.x / screenWidth
        currentSlide = parseInt(Math.ceil(approxCurrentSlide.toFixed(2)) + 1)
        this.setCurrentSlide(currentSlide)
      }
    }
  }

  render() {
    const { totalSlide, currentSlide } = this.state
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
          onContentSizeChange={this.setTotalSlides}
          onMomentumScrollEnd={this.handleScrollEnd}
        >
          {[...Array(noOfSlides)].map((e, i) => {
            const startIndex = i + 1
            const startPosition = ((startIndex + (startIndex - 1)) - 1)
            const endPosition = (startIndex * 2)
            return <CarouselSlide key={i} cards={movies.slice(startPosition, endPosition)} />
          })}
        </ScrollView>
        <View style={styles.cardCountContainer}>
          <Text style={styles.countText}>Total Slides    : {totalSlide}</Text>
          <Text style={styles.countText}>Current Slide : {currentSlide}</Text>
        </View>
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
