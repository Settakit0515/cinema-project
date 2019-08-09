<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm4 md3 v-for="i in 10" :key="i" class="px-3 pb-3">
          <v-card class="px-5 py-2">
            <v-layout row wrap class="pb-2">
              <v-flex xs4>
                <div class="centerdiv setcenter">
                  <img
                    src="https://img04.mgo-images.com/image/thumbnail?id=MMVAF76018A477C2826A4EC8747C40B7BE27&ql=70&sizes=310x465"
                    width="100%"
                  />
                </div>
              </v-flex>
              <v-flex xs8 class="pl-5">
                <p>Thearter: {{i}}</p>
                <v-divider></v-divider>
                <p>Avengers</p>
                <p>Time: 183 min.</p>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-card-actions>
              <v-layout row wrap>
                <v-flex xs3 sm4 md4 v-for="i in 6" :key="i" class="pa-1">
                  <v-btn class="grey darken-1" block text>00.00</v-btn>
                </v-flex>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.centerdiv {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.setcenter {
  min-height: 50px;
}
</style>
