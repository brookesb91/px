render(
  {
    selector: '#stage',
    size: 10,
    height: 12,
    width: 16,
    layers: ['background', 'foreground'],
  },
  [
    sprite({
      layer: () => 'background',
      palette: () => ['white', 'black'],
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
