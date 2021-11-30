const layers = ['ui'];

const digits = ([o, x]) => [
  [
    [x, x, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, x, x],
  ],
  // One
  [
    [o, o, x],
    [o, o, x],
    [o, o, x],
    [o, o, x],
    [o, o, x],
  ],
  // Two
  [
    [x, x, x],
    [o, o, x],
    [x, x, x],
    [x, o, o],
    [x, x, x],
  ],
  // Three
  [
    [x, x, x],
    [o, o, x],
    [x, x, x],
    [o, o, x],
    [x, x, x],
  ],
  // Four
  [
    [x, o, x],
    [x, o, x],
    [x, x, x],
    [o, o, x],
    [o, o, x],
  ],
  // Five
  [
    [x, x, x],
    [x, o, o],
    [x, x, x],
    [o, o, x],
    [x, x, x],
  ],
  // Six
  [
    [x, x, x],
    [x, o, o],
    [x, x, x],
    [x, o, x],
    [x, x, x],
  ],
  // Seven
  [
    [x, x, x],
    [o, o, x],
    [o, o, x],
    [o, o, x],
    [o, o, x],
  ],
  // Eight
  [
    [x, x, x],
    [x, o, x],
    [x, x, x],
    [x, o, x],
    [x, x, x],
  ],
  // Nine
  [
    [x, x, x],
    [x, o, x],
    [x, x, x],
    [o, o, x],
    [o, o, x],
  ],
];

const digit = sprite({
  layer: () => layers[0],
  palette: () => ['white', 'black'],
  state: ({ time, delta }) => ({
    index: Math.floor(time / 1000) % 10,
  }),
  render: (palette, frame, { index }) => digits(palette)[index],
});

render({ selector: '#stage', layers, height: 10, width: 10, size: 15 }, [
  digit,
]);
