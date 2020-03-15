import React, { Component } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles from './style'


export default class MovieHome extends Component {
  render() {
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
          <View style={styles.slide}>
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg' }} style={styles.imageCard} />
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/z7FCF54Jvzv9Anxyf82QeqFXXOO.jpg' }} style={styles.imageCard} />
          </View>
          <View style={styles.slide}>
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/3Nt3v1uzUgfSuVARD1AnI9g9Zl9.jpg' }} style={styles.imageCard} />
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/pThyQovXQrw2m0s9x82twj48Jq4.jpg' }} style={styles.imageCard} />
          </View>
          <View style={styles.slide}>
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/tgcrYiyG75iDcyk3en9NzZis0dh.jpg' }} style={styles.imageCard} />
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg' }} style={styles.imageCard} />
          </View>
          <View style={styles.slide}>
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/h6Wi81XNXCjTAcdstiCLRykN3Pa.jpg' }} style={styles.imageCard} />
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/d9PhCnofBEeQGR3lwywTjWKBiXj.jpg' }} style={styles.imageCard} />
          </View>
          <View style={styles.slide}>
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/qR2sOAnLcdysU1be1PO6Y0pfuR5.jpg' }} style={styles.imageCard} />
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w1280/yTIsWzMUsrKdNngIEf15Iz1n3SS.jpg' }} style={styles.imageCard} />
          </View>
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
