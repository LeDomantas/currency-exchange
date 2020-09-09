const LRUCache = require('../models/LRUCache');

let cache;

beforeEach(() => {
  cache = new LRUCache(2);
});

test('LRUCache makes entries retrievable by their keys', async () => {
  cache.put(1, 2);
  expect(cache.get(1)).toBe(2);
});

test('LRUCache returns false if key has not been set', async () => {
  expect(cache.get(1)).toBe(false);
});

test('LRUCache holds up to capacity entries', async () => {
  cache.put('one', 1);
  cache.put('two', 2);
  cache.put('three', 3);

  expect(cache.get('one')).toBe(false);
  expect(cache.get('two')).toBe(2);
  expect(cache.get('three')).toBe(3);
});

it('LRUCache evicts LRU entry if cache is full', function () {
  cache.put('one', 1);
  cache.put('two', 2);
  cache.get('one');
  cache.put('three', 3);

  expect(cache.get('one')).toBe(1);
  expect(cache.get('two')).toBe(false);
  expect(cache.get('three')).toBe(3);
});
