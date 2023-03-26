const flat = [
  { id: 1, parentId: 3 },
  { id: 3, parentId: 8 },
  { id: 4, parentId: 6 },
  { id: 6, parentId: 3 },
  { id: 7, parentId: 6 },
  { id: 8, parentId: null },
  { id: 10, parentId: 8 }, 
  { id: 13, parentId: 14 },
  { id: 14, parentId: 10 }
]

// Create root for top-level node(s)
const root = [];

flat.forEach(node => {
  // No parentId means top level
  if (!node.parentId) return root.push(node);
  
  // Insert node as child of parent in flat array
  const parentIndex = flat.findIndex(el => el.id === node.parentId);
  if (!flat[parentIndex].children) {
    return flat[parentIndex].children = [node];
  }
  
  flat[parentIndex].children.push(node);
});

console.dir(root, { depth: null }); 

