/**
 * @typedef AnimationBuilder
 * @type {function(Frame, Record<string, unknown>):string}
 *
 * @typedef AnimationsConfig
 * @type {object}
 * @property {number} [rate=30] Refresh rate.
 * @property {AnimationBuilder} animation Animation builder.
 *
 * @typedef Animations
 * @type {Record<string, function(Frame, Record<string,unknown>):Pixels[]}
 */

/**
 *
 * @param {AnimationsConfig} config Animations config object.
 * @param {Animations} animations Animations map.
 * @returns {PixelsBuilder}
 */
const animate =
  ({ rate = 30, animation }, animations) =>
  (frame, state) => {
    const tick = Math.floor(frame.time / rate);
    const name = animation(frame, state);
    const animationFrames = animations[name];
    const count = animationFrames.length;
    const animationFrame = animationFrames[tick % count];
    return animationFrame;
  };

sprite({
  render: animate(
    {
      animation: () => 'idle',
    },
    { idle: [[0, 0, 0]] }
  ),
});
