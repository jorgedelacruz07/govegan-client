<template>
  <v-app>
    <Navbar></Navbar>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex v-for="card in cards" v-bind="{ [`xs${card.flex}`]: true }" :key="card.title">
                  <v-card>
                    <v-card-media :src="card.src" height="200px">
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline white--text" v-text="card.title"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>mdi-watch</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>share</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from '../layouts/navbar'
export default {
  data () {
    return {
      cards: [
        { title: 'Pre-fab homes', src: 'https://placeimg.com/900/300/people', flex: 12 },
        { title: 'Favorite road trips', src: 'https://placeimg.com/400/250/people', flex: 6 },
        { title: 'Favorite road trips', src: 'https://placeimg.com/400/250/people', flex: 6 },
        { title: 'Favorite road trips', src: 'https://placeimg.com/400/250/people', flex: 6 },
        { title: 'Favorite road trips', src: 'https://placeimg.com/400/250/people', flex: 6 },
        { title: 'Favorite road trips', src: 'https://placeimg.com/400/250/people', flex: 6 },
        { title: 'Best airlines', src: 'https://placeimg.com/400/250/people', flex: 6 }
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
