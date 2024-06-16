export function isAllNodeisConnected(nodes, edges) {
    const nodeIds = new Set(nodes.map(node => node.id));
    const connectedNodeIds = new Set();
  
    edges.forEach(edge => {
      connectedNodeIds.add(edge.source);
      connectedNodeIds.add(edge.target);
    });
  
    // Check if every node is connected
    for (let nodeId of nodeIds) {
      if (!connectedNodeIds.has(nodeId)) {
        return false;
      }
    }
  
    return true;
  }
  