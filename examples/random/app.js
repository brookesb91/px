const H = 16;
const W = 16;

const random = (max) => {
  return Math.floor(Math.random() * max);
};

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

render(
  {
    selector: '#stage',
    height: H,
    width: W,
    size: 5,
    layers: ['background'],
  },
  [
    sprite({
      layer: () => 'background',
      palette: () => colors,
      render: () => {
        return Array.from(new Array(W), () =>
          Array.from(new Array(H), () => random(colors.length))
        );
      },
    }),
  ]
);
