## Description
This repository contains a minimal reproducible example of a problem with the bundling of static assets imported by components that are distributed as a library.

## Repo structure

The project consists of two directories: "`library`" and "`app`". The `library` directory simulates a barebones component library. It has a single exportable component — the `<delete-button>`.

The `delete-button` component is an icon button. It attempts to use a trick [applied](https://github.com/lit/lit.dev/blob/main/packages/lit-dev-content/src/components/lazy-svg.ts) by lit.dev to load an `svg` icon without inlining it into the javascript source, while still being able to style it through css:

```ts
return html`
  <svg
    viewBox="0 0 32 32"
  >
    <use href=${iconUrl}></use>
  </svg>
`;
```

### Build script

To build the component library package:

```
cd library
npm install
npm run build
```

This will produce a `dist` directory that the `app` can link to.

### Using the library

After the component library has been bult:

```
cd app
npm install
npm run dev
```

## The problem

The expectation is that the consumer of this library should be able to render the button with an svg image inside of it. The reality is that, due to the default behaviour of Vite, this is not happening. You will notice that Vite transforms the link to the svg into a data url, whereas svgs no longer support data urls in the svg `use` element ([link](https://developer.chrome.com/blog/migrate-way-from-data-urls-in-svg-use))