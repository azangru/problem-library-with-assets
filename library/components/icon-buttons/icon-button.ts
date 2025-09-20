import {html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('icon-button')
export class IconButton extends LitElement {

  static styles = [
    css`
      :host {
        display: inline-block;
        line-height: 1;
        font-size: 0;
        height: var(--icon-button-height, 18px);
        width: var(--icon-button-width, 18px);
      }

      button {
        appearance: none;
        padding: 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        line-height: 1;
        cursor: pointer;
      }

      ::slotted(svg) {
        width: 100%;
        height: 100%;
        fill: var(--icon-button-color, blue);
      }

      button[disabled] ::slotted(svg) {
        fill: var(--icon-button-disabled-color, grey);
      }
    `
  ];

  @property({ type: Boolean }) disabled = false;

  render() {
    const ariaLabel = this.dataset.ariaLabel;

    return html`
      <button
        type="button"
        ?disabled=${this.disabled}
        aria-label=${ariaLabel ?? ''}
      >
        <slot></slot>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'icon-button': IconButton;
  }
}