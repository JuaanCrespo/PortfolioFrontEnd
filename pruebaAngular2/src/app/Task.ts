export interface Task {
    id?: number;// el signo de pregunta significa que cuando cramos podria venir o no
    text: string;
    day: string;
    reminder: boolean
}