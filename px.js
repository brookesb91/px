/**
 * @typedef Frame
 * @type {object}
 * @property {number} time Current frame time.
 * @property {number} delta Time since last frame.
 *
 * @typedef Palette
 * @type {string[]}
 *
 * @typedef Position
 * @type {[number, number]}
 *
 * @typedef Pixels
 * @type {number[][]}
 *
 * @typedef PaletteBuilder
 * @type {function(Frame,Record<string, unknown>):Palette}
 *
 * @typedef PixelsBuilder
 * @type {function(Frame,Record<string, unknown>):Pixels}
 *
 * @typedef PositionBuilder
 * @type {function(Frame,Record<string, unknown>):Position}
 *
 * @typedef StateBuilder
 * @type {function(Frame):Record<string, unknown>}
 *
 * @typedef SpriteConfig
 * @type {object}
 * @property {string} layer Layer to render this sprite to.
 * @property {PaletteBuilder} [palette=()=>[]] Palette builder.
 * @property {PixelsBuilder} [render=()=>[]] Render function.
 * @property {PositionBuilder} [position=()=>[0,0]] Rendering origin.
 * @property {StateBuilder} [state=()=>({})] State builder.
 *
 * @typedef Sprite
 * @type {object}
 * @property {string} layer Layer to render this sprite to.
 * @property {PaletteBuilder} palette Palette builder.
 * @property {PixelsBuilder} render Render function.
 * @property {PositionBuilder} position Rendering origin.
 * @property {StateBuilder} state State builder.
 *
 * @typedef RenderConfig
 * @type {object}
 * @property {string} selector Root element selector.
 * @property {string[]} layers Rendering layers.
 * @property {number} height Rendering height.
 * @property {number} width Rendering width;
 * @property {number} size Rendering pixel size.
 */

/**
 *
 * @param {SpriteConfig} config Sprite configuration.
 * @returns {Sprite} Sprite
 */
const sprite = ({
  layer,
  palette = () => [],
  render = () => [],
  position = () => [0, 0],
  state = () => ({}),
}) => ({
  layer,
  palette,
  render,
  position,
  state,
});

/**
 *
 * @param {RenderConfig} config Rendering configuration.
 * @param {Sprite[]} sprites Sprites to render.
 */
const render = ({ selector, layers, height, width, size }, sprites) => {
  // Setup rendering stage.
  const stage = document.querySelector(selector);
  stage.style.position = 'relative';
  stage.style.height = `${height * size}px`;
  stage.style.width = `${width * size}px`;

  // Map of rendering contexts
  const ctxs = {};

  // Setup layers
  layers.forEach((layer) => {
    const canvas = document.createElement('canvas');
    canvas.height = height * size;
    canvas.width = width * size;
    canvas.id = layer;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';

    ctxs[layer] = canvas.getContext('2d');

    stage.appendChild(canvas);
  });

  // Clear all rendering contexts
  const clear = () => {
    Object.values(ctxs).map((ctx) => {
      ctx.canvas.height = ctx.canvas.height;
      ctx.canvas.width = ctx.canvas.width;
    });
  };

  // Draw a frame
  const draw = (time, delta) => {
    if (time !== 0) {
      clear();
    }

    let index = 0;
    let total = sprites.length;
    const frame = { time, delta };

    while (index < total) {
      const sprite = sprites[index];
      const state = sprite.state(frame);
      const layer = sprite.layer(frame, state);
      if (layer in ctxs) {
        const ctx = ctxs[layer];

        const [posX, posY] = sprite.position(frame, state);
        const palette = sprite.palette(frame, state);
        const pixels = sprite.render(frame, state);

        const rows = pixels.length;
        let y = 0;

        while (y < rows) {
          const cols = pixels[y].length;
          let x = 0;

          while (x < cols) {
            ctx.save();
            ctx.fillStyle = palette[pixels[y][x]];
            ctx.fillRect(
              x * size + posX * size,
              y * size + posY * size,
              size,
              size
            );
            ctx.restore();
            x++;
          }
          y++;
        }
      }
      index++;
    }

    requestAnimationFrame((next) => draw(next, next - time));
  };

  // First frame
  draw(0, 0);
};
