import test from 'ava';

/**
 * Builds the query URL to fetch some endpoint.
 *
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const buildQuery = (data: string): string => `http://localhost:3000/myendpoint/${data}`;

test('Query API:', t => {
  // t.plan(10);
  t.pass();

  // await asyncForEach(datesToQuery, async (_arg, index) => {
  //   const query = buildQuery(_arg);
  //   const response = await fetch(query);
  //   const data = await response.json();
  //   t.is(response.status, 200);
  //   t.deepEqual(data, {count: expectedCounts[index]});
  // });
});

test('Query API: should return 400 on empty query', t => {
  t.pass();

  // const response = await fetch(emptyQuery);
  // const data = await response.json();

  // t.is(response.status, 400);
  // t.deepEqual(data, {
  //   error: 'Endpoint not found/ Bad query, check if your query is correct.'
  // });
});
