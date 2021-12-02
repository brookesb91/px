render(
  {
    selector: '#stage',
    layers: ['foreground'],
    height: 16,
    width: 16,
    size: 15,
  },
  [
    sprite({
      palette: () => ['transparent', '#D82800', '#887000', '#FC9838'],
      layer: () => 'foreground',
      render: () => [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 2, 2, 2, 2, 3, 3, 2, 3, 0, 0, 0, 0],
        [0, 0, 2, 2, 3, 2, 3, 3, 3, 2, 3, 3, 3, 0, 0],
        [0, 0, 2, 2, 3, 2, 2, 3, 3, 3, 2, 3, 3, 3, 0],
        [0, 0, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 0, 0],
        [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
        [0, 0, 0, 2, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0, 0],
        [0, 0, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 0, 0],
        [0, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 0],
        [0, 3, 3, 3, 2, 1, 3, 1, 1, 3, 1, 2, 3, 3, 0],
        [0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 0],
        [0, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0],
        [0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0],
      ],
    }),
  ]
);
