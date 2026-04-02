export default function Node({ node }) {
  return (
    <div
      className={`node ${node.type || ""}`}
      style={{
        left: `${node.x}px`,
        top: `${node.y}px`
      }}
    >
      {node.label}
    </div>
  );
}
