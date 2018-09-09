<template>
  <v-container fluid fill-height>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          {{ msg }}
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
		<v-btn>normal</v-btn>
		<v-btn color="primary">primary</v-btn>
		<v-btn color="secondary">secondary</v-btn>
		<v-btn color="accent">accent</v-btn>
		<v-btn color="error">error</v-btn>
		<v-btn color="info">info</v-btn>
		<v-btn color="success">success</v-btn>
		<v-btn color="warning">warning</v-btn>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
	@Prop() private msg: string = '"First, solve the problem. Then, write the code."';
}
</script>
