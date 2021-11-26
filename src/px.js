/**
 * Convenience method for applying defaults.
 */
const sprite = ({
  layer,
  palette = () => [],
  render = () => [],
  position = () => [0, 0],
}) => ({
  layer,
  palette,
  render,
  position,
});

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

  // Append stage element
  document.body.appendChild(stage);

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

    while (index < total) {
      const sprite = sprites[index];
      const layer = sprite.layer({ time, delta });
      if (layer in ctxs) {
        const ctx = ctxs[layer];
        const [posX, posY] = sprite.position({ time, delta });
        const palette = sprite.palette({ time, delta });
        const tiles = sprite.render(palette, { time, delta });

        const rows = tiles.length;
        let y = 0;

        while (y < rows) {
          const cols = tiles[y].length;
          let x = 0;

          while (x < cols) {
            ctx.save();
            ctx.fillStyle = tiles[y][x];
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
