import Node from "./Node";
import Edge from "./Edge";
import { nodes, edges } from "../data/mapData";

export default function Graph() {
  const getNode = (id) => nodes.find((n) => n.id === id);

  return (
    <div className="graph">
      <svg className="edges" viewBox="-600 -100 1200 1700" preserveAspectRatio="xMidYMid meet">
        {edges.map(([a, b], i) => (
          <Edge key={i} from={getNode(a)} to={getNode(b)} />
        ))}
      </svg>

      {nodes.map((node) => (
        <Node key={node.id} node={node} />
      ))}
    </div>
  );
}
