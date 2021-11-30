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
  render: (palette, { time, delta }) => {
    const i = Math.floor(time / 1000) % 10;
    return digits(palette)[i];
  },
});

render({ selector: '#stage', layers, height: 10, width: 10, size: 15 }, [
  digit,
]);
