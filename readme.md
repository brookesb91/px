# px - A pixel-based canvas rendering library

## Quick Start

Add px to your page.

```html
<script src="path/to/px.js"></script>
```

Create a root element.

```html
<div id="stage"></div>
```

Render sprites using JavaScript.

```js
/**
 * Render, with the given options, the provided sprites.
 */
render(
  // Rendering config
  {
    /**
     * Selector for the root element.
     * Uses first element found with `document.querySelector(selector)`.
     */
    selector: '#stage',
    /**
     * The physical pixel size of each
     * rendered sprite pixel.
     */
    size: 10,
    /**
     * The height of the rendering canvas.
     *
     * The final value is equal to the height
     * multiplied by the size.
     */
    height: 12,
    /**
     * The width of the rendering canvas.
     *
     * The final value is equal to the width
     * multiplied by the size.
     */
    width: 16,
    /**
     * Named and ordered layers.
     * Layers are rendered in order of their index.
     */
    layers: ['background', 'foreground'],
  },
  // Array of sprites to be rendered
  [
    sprite({
      /**
       * Return the named layer this sprite is rendered to.
       */
      layer: ({ time, delta }) => 'background',
      /**
       * Return the colour palette for this sprite.
       */
      palette: ({ time, delta }) => ['white', 'black'],
      /**
       * Given the palette, return the pixels of this sprite.
       */
      render: ([w, b], { time, delta }) => [
        [b, b, b, b, w, w, w, w, b, b, b, b, w, w, w, w],
        [b, b, b, b, w, w, w, w, b, b, b, b, w, w, w, w],
        [b, b, b, b, w, w, w, w, b, b, b, b, w, w, w, w],
        [b, b, b, b, w, w, w, w, b, b, b, b, w, w, w, w],
        [w, w, w, w, b, b, b, b, w, w, w, w, b, b, b, b],
        [w, w, w, w, b, b, b, b, w, w, w, w, b, b, b, b],
        [w, w, w, w, b, b, b, b, w, w, w, w, b, b, b, b],
        [w, w, w, w, b, b, b, b, w, w, w, w, b, b, b, b],
        [b, b, b, b, w, w, w, w, b, b, b, b, w, w, w, w],
        [b, b, b, b, w, w, w, w, b, b, b, b, w, w, w, w],
        [b, b, b, b, w, w, w, w, b, b, b, b, w, w, w, w],
        [b, b, b, b, w, w, w, w, b, b, b, b, w, w, w, w],
      ],
    }),
    sprite({
      /**
       * Optionally return a position for this sprite.
       * This position acts as the sprite's rendering origin.
       */
      position: ({ time, delta }) => [5, 6],
      layer: ({ time, delta }) => 'foreground',
      palette: ({ time, delta }) => ['transparent', 'red'],
      render: ([t, r], { time, delta }) => [
        [r, t, t, r, t, r, t, r],
        [r, t, t, r, t, r, t, r],
        [r, r, r, r, t, r, t, r],
        [r, t, t, r, t, r, t, t],
        [r, t, t, r, t, r, t, r],
      ],
    }),
  ]
);
```
