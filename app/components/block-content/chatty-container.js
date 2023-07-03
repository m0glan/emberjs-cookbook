import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ChattyContainerComponent extends Component {
    @tracked greeting;

    names = [ 'Bob', 'Alice', 'Jeremy', 'John', 'Mary' ];

    greet = () => {
        const name = this.names[Math.floor(Math.random()*this.names.length)];
        this.greeting = `Hi there, ${name}!`;
    };
}