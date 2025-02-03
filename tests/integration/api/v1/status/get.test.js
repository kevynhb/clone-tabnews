test("Get to /api/vi/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status"); // fetch é um cliente http para acessar os endpoints, faz request e recebe response
  expect(response.status).toBe(200);

  const responseBody = await response.json(); // esta fazendo Parsing do corpo http em texto puro para json
  expect(responseBody.updated_at).toBeDefined();

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parseUpdatedAt);

  // Desafio
  expect(responseBody.version_v).toBeDefined();
  expect(responseBody.version_v).toEqual("16.0");

  expect(responseBody.max_connections).toBeDefined();
  expect(responseBody.max_connections).toBeGreaterThan(0);

  expect(responseBody.used_connections).toBeDefined();
  expect(responseBody.used_connections).toEqual(1);
  expect(responseBody.used_connections).toBeLessThanOrEqual(
    //used menor ou igual ao max connections
    responseBody.max_connections,
  );

  console.log(responseBody.version_v);
  console.log(responseBody.max_connections);
  console.log(responseBody.used_connections);
});

// comando .only do jest prioriza rodar somente este teste, e skipped os outros tests
// test.only("Teste de SQL Injection", async () => {
//   const response = await fetch(
//     // "http://localhost:3000/api/v1/status?databaseName=local_db",
//     "http://localhost:3000/api/v1/status?databaseName='; select pg_sleep(5); --",
//   );
// });
