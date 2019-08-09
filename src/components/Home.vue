<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm4 md3 v-for="i in 10" :key="i" class="px-3 pb-3">
          <v-card class="px-5 py-2">
            <v-layout row wrap>
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
