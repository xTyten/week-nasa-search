import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.altText = '';
    this.secondCreator = '';
  }

  static get properties() {
    return {
      source: { type: String },
      title: { type: String },
      altText: { type: String },
      secondCreator: { type: String },
    };
  }

  static get styles() {
    return [css`
    
    a {
      text-decoration: none;
      color: black;
    }

    .image {
      // display: inline-block;
      box-sizing: border-box;
      width: 240px;
      height: 348px;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      align-items: center;
      gap: 6px;

      padding-top: var(--ddd-spacing-4);
      border: var(--ddd-border-md);
      border-color: var(--ddd-theme-default-limestoneGray);
      border-radius: var(--ddd-radius-xs);
      box-shadow: var(--ddd-boxShadow-md);
    }

    .image:hover {
      background-color: var(--ddd-theme-default-slateLight);
    }

    #text {
      // Displays 3 lines of text and adds an ellipsis to the end if the text overflows
      display: -webkit-box;
      width: 208px;
      height: 60px;
      /*
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;*/
      overflow: hidden;
      // EXAMPLE OVERFLOW: NASA, Lockheed Martin S-3B Viking Aircraft #N601NA, Unmanned Aircraft Communications Project
    }

    p {
      width: 208px;
      height: 40px;
      padding: 0;
      margin: 0;
      font-size: 16px;
      overflow: hidden;
    }

    .image div {
      font-size: 16px;
      font-weight: bold;
    }

    .image img {
      width: 208px;
      height: 208px;
      object-fit: cover; // prevents stretching
      display: flex;
      flex-shrink: 0; // prevents shrinking
    }

    `];
  }

  render() {
    return html`
    <a href="${this.source}" target="_blank">
    <div class="image">
        <img 
          src="${this.source}" 
          alt="${this.altText}"
        />
        <p title="${this.secondCreator}">Owner: ${this.secondCreator}</p> <!-- Hover over owner to see the full text -->
        <div id="text">${this.title}</div>
    </div>
    </a>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);