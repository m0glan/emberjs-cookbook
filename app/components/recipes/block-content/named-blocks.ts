import Component from '@glimmer/component';

export default class NamedBlocksComponent extends Component {
    get cardViewHbs() {
        const html = `
<div class="card-view">
    <div class="card-view__header">
        {{yield to="header"}}
    </div>
    
    <div class="card-view__body">
        {{yield to="body"}}
    </div>
</div>
        `
        return html;
    }

    get cardViewInvocationHbs() {
        const html = `
<CardView>
    <:header>
        Talador
    </:header>

    <:body>
        <p>Talador is a zone located in the central region of Draenor, and is considered a sanctuary for all Draenei. 
            At its heart rests Shattrath City, the great metropolis, and the spiritual well of Auchindoun, where the souls of departed draenei reside. 
            Bathed in a perpetual autumn hue, its beautiful olemba forests, gardens and settlements are at risk of decimation by the Iron Horde and the Burning Legion.</p>
    </:body>
</CardView>
        `
        return html;
    }
}