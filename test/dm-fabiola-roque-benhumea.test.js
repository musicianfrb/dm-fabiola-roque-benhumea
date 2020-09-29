import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../dm-fabiola-roque-benhumea.js';

suite('<dm-fabiola-roque-benhumea>', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<dm-fabiola-roque-benhumea></dm-fabiola-roque-benhumea>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });

});





