<template>
	<v-container fluid fill-height>
		<v-layout>
			<v-flex>
				<v-data-table :headers="headers" :items="timeEntries" hide-actions class="elevation-1">
					<template slot="items" slot-scope="props">
						<td>{{ props.item.started | date }}</td>
						<td>{{ props.item.category }}</td>
						<td>{{ props.item.subject }}</td>
						<td>{{ props.item.duration }}</td>
						<td>
							<v-icon v-if="props.item.done" color="success">done</v-icon>
							<v-icon v-else color="error">clear</v-icon>
						</td>
					</template>
				</v-data-table>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TimeEntry } from './../shared/time-entry';

interface Header {
	text: string;
	value: string;
	align?: 'left' | 'center' | 'right';
	sortable?: boolean;
	class?: string[] | string;
	width?: string;
}

@Component({
	filters: {
		date(date: Date): string {
			return date.toLocaleString('de-DE');
		}
	},
	name: 'hello'
})
export default class HelloWorld extends Vue {
	private headers: Header[] = [
		{ text: 'Started', value: 'started' },
		{ text: 'Category', value: 'category' },
		{ text: 'Subject', value: 'subject' },
		{ text: 'Duration', value: 'duration' },
		{ text: 'Done?', value: 'done' }
	];
	private timeEntries: TimeEntry[] = [
		{
			id: '401e7428-0b07-4307-a79e-5f79a42451c3',
			started: new Date(),
			category: 'AAA',
			subject: 'Test Entry',
			done: false
		},
		{
			id: '401e7428-0b07-4307-a79e-5f79a42451c4',
			started: new Date(new Date().getTime() - 1000 * 60 * 60 * 1.4),
			stopped: new Date(),
			category: 'BBB',
			subject: 'Test Entry2',
			duration: 1.4,
			done: true
		}
	];
}
</script>
