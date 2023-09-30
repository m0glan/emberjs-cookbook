import Component from '@glimmer/component';

export default class MultipleBlocksComponent extends Component {
    get headerBannerHbs() {
        const html =
         `
<div class="header-banner">
    {{yield (hash Section=(component 'header-banner-section'))}}
</div>
         `;
        return html;
    }

    get headerBannerSectionHbs() {
        const html =
        `
<div class="header-banner__section">
    {{yield}}
</div>
        `;
       return html;  
    }

    get headerBannerInvocationHbs() {
        const html =
         `
<HeaderBanner as |banner|>
    <banner.Section>
        Section 1
    </banner.Section>

    <banner.Section>
        Section 2
    </banner.Section>

    <banner.Section>
        Section 3
    </banner.Section>

    <banner.Section>
        Section 4
    </banner.Section>

    <banner.Section>
        Section 5
    </banner.Section>
</HeaderBanner>
         `;
        return html;
    }
}