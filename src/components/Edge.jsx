export default function Edge({ from, to }) {
  const path = `
    M ${from.x} ${from.y}
    C ${from.x} ${(from.y + to.y) / 2},
      ${to.x} ${(from.y + to.y) / 2},
      ${to.x} ${to.y}
  `;

  return <path d={path} className="edge" />;
}
