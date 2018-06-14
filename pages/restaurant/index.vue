<template>
  <v-app>
    <Navbar></Navbar>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
          <v-card v-for="res in restaurants" :key="res">
            <v-card-media :src="res.image" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ res.name }}</div>
                <span class="grey--text">{{ res.description }}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="red">Compartir</v-btn>
              <v-btn flat color="blue">Ver</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from '../../layouts/navbar'
export default {
  data () {
    return {
      restaurants: [
        {
          slug: 'restaurant01',
          name: 'Restaurante 01',
          description: 'Descripción del Restaurante 01',
          image: 'https://placeimg.com/600/200/any',
          latitude: '12.123456',
          longitude: '-7.123456'
        },
        {
          slug: 'restaurant02',
          name: 'Restaurante 02',
          description: 'Descripción del Restaurante 02',
          image: 'https://placeimg.com/600/200/any',
          latitude: '12.123456',
          longitude: '-7.123456'
        },
        {
          slug: 'restaurant03',
          name: 'Restaurante 03',
          description: 'Descripción del Restaurante 03',
          image: 'https://placeimg.com/600/200/any',
          latitude: '12.123456',
          longitude: '-7.123456'
        },
        {
          slug: 'restaurant04',
          name: 'Restaurante 04',
          description: 'Descripción del Restaurante 04',
          image: 'https://placeimg.com/600/200/any',
          latitude: '12.123456',
          longitude: '-7.123456'
        },
        {
          slug: 'restaurant05',
          name: 'Restaurante 05',
          description: 'Descripción del Restaurante 05',
          image: 'https://placeimg.com/600/200/any',
          latitude: '12.123456',
          longitude: '-7.123456'
        },
        {
          slug: 'restaurant06',
          name: 'Restaurante 06',
          description: 'Descripción del Restaurante 06',
          image: 'https://placeimg.com/600/200/any',
          latitude: '12.123456',
          longitude: '-7.123456'
        }
        ]
      }
    },
    components: {
      Navbar
    }
  }
</script>

<style>
</style>
