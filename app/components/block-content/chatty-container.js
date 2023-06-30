import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ChattyContainerComponent extends Component {
    @tracked greeting;

    names = [ 'Jan', 'Dave', 'Vlad', 'Olesia', 'Serhii' ];

    greet = () => {
        const name = this.names[Math.floor(Math.random()*this.names.length)];
        this.greeting = `Hi there, ${name}!`;
    };
}