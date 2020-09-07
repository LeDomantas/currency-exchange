class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.nodeMap = {};
    this.head = new Node(null, null, null, null);
    this.tail = new Node(null, null, null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get = (key) => {
    let result = false;
    const node = this.nodeMap[key];
    if (!!node) {
      this.remove(node);
      this.add(node);
      result = node.val;
    }
    return result;
  };

  put = (key, val) => {
    const node = this.nodeMap[key];
    if (!!node) {
      this.remove(node);
      node.val = val;
      this.add(node);
    } else {
      if (Object.keys(this.nodeMap).length === this.capacity) {
        delete this.nodeMap[this.tail.prev.key];
        this.remove(this.tail.prev);
      }
      const newNode = new Node(key, val, null, null);

      this.nodeMap[key] = newNode;
      this.add(newNode);
    }
  };

  add = (node) => {
    const headNext = this.head.next;
    node.next = headNext;
    node.prev = headNext;
    headNext.prev = node;
    this.head.next = node;
    node.prev = this.head;
  };

  remove = (node) => {
    const nextNode = node.next;
    const prevNode = node.prev;

    nextNode.prev = prevNode;
    prevNode.next = nextNode;
  };
}

class Node {
  constructor(key, val, prev, next) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

module.exports = LRUCache;
