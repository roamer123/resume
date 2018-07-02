const dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.um || node.key;
    const title = node.title;
    const number = node.number;
    dataList.push({ key, title, number });
    if (node.children) {
      // console.log('node.children', node.children)
      generateList(node.children, node.key);
    }
  }
  return dataList
};

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => (item.um || item.key) === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  // console.log('parentKey', parentKey)
  return parentKey;
};

export { generateList, getParentKey };

