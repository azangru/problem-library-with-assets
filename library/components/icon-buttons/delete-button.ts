import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './icon-button';

import iconUrl from '../../icons/icon_delete.svg?no-inline';

@customElement('delete-button')
export class DeleteButton extends LitElement {

  static styles = [
    css`
      :host {
        display: inline-block;
        font-size: 0;
      }
    `
  ];

  @property({ type: Boolean }) disabled = false;

  render() {
    const ariaLabel = this.dataset.ariaLabel ?? 'Delete';

    return html`
      <icon-button
        ?disabled=${this.disabled}
        aria-label=${ariaLabel}
      >
        ${this.#renderSvg()}
      </icon-button>
    `
  }

  #renderSvg() {
    return html`
      <svg
        viewBox="0 0 32 32"
      >
        <use href=${iconUrl}></use>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'delete-button': DeleteButton;
  }
}