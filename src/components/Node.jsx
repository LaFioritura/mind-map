export default function Node({ node }) {
  return (
    <div
      className={`node ${node.type || ""}`}
      style={{
        transform: `translate(${node.x}px, ${node.y}px)`
      }}
    >
      {node.label}
    </div>
  );
}
