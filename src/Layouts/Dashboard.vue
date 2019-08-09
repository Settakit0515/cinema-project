<template>
  <div>
    <!---------------------------APP BAR------------------------------>
    <!---------------------------------------------------------------->
    <!---------------------------------------------------------------->
    <v-app-bar dense app>
      <v-btn text fab small class="hidden-xs-only">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span class="font-weight-bold red--text">INET</span>
        <span class="font-weight-light">CENIFLEX</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <!---------------------------END APP BAR------------------------------>
    <!-------------------------------------------------------------------->
    <!-------------------------------------------------------------------->
    <!-------------------------------------------------------------------->
    <!--------------------------CONTENT----------------------------------->
    <v-content>
      <router-view></router-view>
    </v-content>
    <!--------------------------END CONTENT----------------------------------->
    <!-------------------------------------------------------------------->
    <!-------------------------------------------------------------------->
    <!---------------------------BOTTOM NAVIGATOR---------------------------->
    <v-bottom-navigation app dense class="hidden-sm-and-up">
      <v-btn
        :value="btn.value"
        x-small
        v-for="(btn, index) in bottomNav"
        :key="index"
        :to="btn.link"
      >
        <span>{{ btn.title }}</span>
        <v-icon>{{ btn.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <!---------------------------END BOTTOM NAVIGATOR---------------------------->
    <!-------------------------------------------------------------------->
    <!-------------------------------------------------------------------->
    <!-------------------------------------------------------------------->
    <!-------------------------FOOTER SHOW IN MD AND UP---------------------->
    <!-- <v-footer app dense class="hidden-xs-only">
      <span>&copy;2019 - Inet Ceniflex</span>
    </v-footer>-->
    <!-------------------------END FOOTER SHOW IN MD AND UP---------------------->
  </div>
</template>

<script>
export default {
  data: () => ({
    bottomNav: [
      {
        title: 'Home',
        icon: 'mdi-home',
        value: 'home',
        link: '/dashboard/home'
      },
      {
        title: 'Favorites',
        icon: 'mdi-heart',
        value: 'favorites',
        link: '/dashboard/favorites'
      },
      {
        title: 'More',
        icon: 'mdi-menu',
        value: 'menu',
        link: '/dashboard/more'
      }
    ]
  })
}
</script>

<style>
</style>
