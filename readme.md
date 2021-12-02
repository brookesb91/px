# px - A pixel-based canvas rendering library

## Quick Start

Add px to your page.

```html
<script src="path/to/px.js"></script>
```

Via JsDelivr

```html
<script src="https://cdn.jsdelivr.net/gh/brookesb91/px@v0.2/px.js"></script>
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
      render: ({ time, delta }) => [
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
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
      render: ({ time, delta }) => [
        [1, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 1],
      ],
    }),
  ]
);
```

## In-Depth

Rendering requires calling the `render` function with a `RenderConfig` object and an array of sprites.

```js
render(config, sprites);
```

### The `RenderConfig` object

| Property   | Type       | Default | Description                                                            |
| ---------- | ---------- | ------- | ---------------------------------------------------------------------- |
| `selector` | `string`   | n/a     | Query selector for the root element.                                   |
| `size`     | `number`   | `0`     | The height and width in screen pixels of each sprite pixel.            |
| `height`   | `number`   | `0`     | The height of the rendering in sprite pixels.                          |
| `width`    | `number`   | `0`     | The width of the rendering in sprite pixels.                           |
| `layers`   | `string[]` | `[]`    | A list of named rendering layers. Lowest layer is at the lowest index. |

Define a sprite by calling the `sprite` function. A rendering accepts an array of sprites.

```js
render(
  {
    /* Render config */
  },
  /* Sprites to render */
  [
    sprite({
      /* Sprite config */
    }),
  ]
);
```

A rendering is created on an initial call to `render` and each subsequent frame using `requestAnimationFrame`. On each frame, each sprite builder method is called before being rendered to its canvas. Each `Frame` contains a current and delta timestamp and is provided to each of the builders.

### The `Frame` object

| Property | Type     | Description                            |
| -------- | -------- | -------------------------------------- |
| `time`   | `number` | The current time stamp.                |
| `delta`  | `number` | The time elapsed since the last frame. |

### The `SpriteConfig` object

| Property   | Type                                                                 | Default       | Description                                                                                                                         |
| ---------- | -------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `layer`    | `(frame: Frame, state: Record<string, unknown>) => string`           | n/a           | Layer builder. Returns the name of the layer this sprite is to be rendered to. Must match a layer provided in the `RenderConfig`.   |
| `state`    | `(frame: Frame) => Record<string, unknown>`                          | `() => ({})`  | Optional state builder. Return a state for the sprite. Note that `px` does not provided state management.                           |
| `position` | `(frame: Frame, state: Record<string, unknown>) => [number, number]` | `() => [0,0]` | Position builder. Returns the positional offset of the sprite. The first value is the x position and the second is the y position.  |
| `palette`  | `(frame: Frame, state: Record<string, unknown>) => string[]`         | `() => []`    | Palette builder. Returns a palette of colours to be used when rendering this sprite. A palette is an array of valid colour strings. |
| `render`   | `(frame: Frame, state: Record<string, unknown>) => number[][]`       | `() => []`    | Pixels builder. Returns the pixels for the sprite. Each pixel is a valid index of the sprite palette.                               |

The builders are called in the order they are listed above.
