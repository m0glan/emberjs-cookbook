import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberjs-cookbook/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | block-content/chatty-container',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<BlockContent::ChattyContainer />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <BlockContent::ChattyContainer>
        template block text
      </BlockContent::ChattyContainer>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);
