export interface TimeEntry {
	id: string;
	started: Date;
	stopped?: Date;
	category: string;
	subject: string;
	duration?: number;
	done: boolean;
}
