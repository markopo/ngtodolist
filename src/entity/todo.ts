import { v4 as uuidv4 } from 'uuid';

export interface Todo {
    id: string;
    name: string;
    done?: boolean;
}

export class TodoFactory {

    public static Create(name: string = ''): Todo {
        const id = uuidv4();

        const todo: Todo = {
            id,
            name,
            done: false
        };

        return todo;
    }
}
