<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" clipped fixed app>
			<v-list dense>
				<v-list-tile value="true" v-for="(item, i) in items" :key="i">
					<v-list-tile-action>
						<v-icon v-html="item.icon"></v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title v-text="item.title"></v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar app fixed clipped-left>
			<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title v-text="title"></v-toolbar-title>
		</v-toolbar>
		<v-content>
			<HelloWorld/>
		</v-content>
		<v-footer app fixed>
			<span class="mx-2">&copy; 2018 Christopher Quadflieg</span>
		</v-footer>
	</v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
	components: {
		HelloWorld
	}
})
export default class App extends Vue {
	public drawer: boolean = false;
	public items: Array<{ icon: string; title: string }> = [
		{
			icon: 'bubble_chart',
			title: 'Inspire'
		}
	];
	public title: string = 'Vuetify.js';
}
</script>
