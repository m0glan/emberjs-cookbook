import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ChattyContainerComponent extends Component {
    @tracked declare greeting: string;

    names = [ 'Bob', 'Alice', 'Jeremy', 'John', 'Mary' ];

    greet = () => {
        const index = Math.floor(Math.random() * this.names.length);
        const name = this.names[index];
        this.greeting = `Hi there, ${name}!`;
    };
}