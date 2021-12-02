const layers = ['ui'];

const digits = [
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  // One
  [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  // Two
  [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ],
  // Three
  [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  // Four
  [
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  // Five
  [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  // Six
  [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  // Seven
  [
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  // Eight
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  // Nine
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
];

render({ selector: '#stage', layers, height: 10, width: 20, size: 15 }, [
  sprite({
    layer: () => layers[0],
    palette: () => ['white', 'black'],
    state: ({ time, delta }) => ({
      index: Math.floor(time / 10000) % 10,
    }),
    render: (frame, { index }) => digits[index],
  }),
  sprite({
    layer: () => layers[0],
    position: () => [5, 0],
    palette: () => ['white', 'black'],
    state: ({ time, delta }) => ({
      index: Math.floor(time / 1000) % 10,
    }),
    render: (frame, { index }) => digits[index],
  }),
  sprite({
    layer: () => layers[0],
    position: () => [10, 0],
    palette: () => ['white', 'black'],
    state: ({ time, delta }) => ({
      index: Math.floor(time / 100) % 10,
    }),
    render: (frame, { index }) => digits[index],
  }),
]);
