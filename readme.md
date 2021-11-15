# PX - A pixel-based canvas rendering library

## Example

```js
/**
 * Render, with the given options, the provided sprites.
 */
render(
  {
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
  [
    sprite({
      /**
       * Return the named layer this sprite is rendered to.
       */
      layer: () => 'background',
      /**
       * Return the colour palette for this sprite.
       */
      palette: () => ['white', 'black'],
      /**
       * Given the palette, return the pixels of this sprite.
       */
      render: ([w, b]) => [
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
      position: () => [5, 6],
      layer: () => 'foreground',
      palette: () => ['transparent', 'red'],
      render: ([t, r]) => [
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
