test("Get to /api/vi/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status"); // fetch é um cliente http para acessar os endpoints, faz request e recebe response
  expect(response.status).toBe(200);
});
