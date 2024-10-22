import { html, fixture, expect } from '@open-wc/testing';
import "../week-nasa-search.js";

describe("weekNasaSearch test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <week-nasa-search
        title="title"
      ></week-nasa-search>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
