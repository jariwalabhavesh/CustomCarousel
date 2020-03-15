import React, { Component } from 'react'
import { View, Image } from 'react-native'
import styles from './style'

class CarouselSlide extends Component {
  render() {
    const { cards } = this.props
    return <View style={styles.slide}>
      {cards.map((card, index) => {
        return <Image source={{ uri: card.url }} style={styles.imageCard} key={index} />
      })}
    </View>

  }
}

export default CarouselSlide