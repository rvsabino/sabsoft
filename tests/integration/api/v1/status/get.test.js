import orquestrator from "tests/orquestrator.js";

beforeAll(async () => {
  await orquestrator.waitForAllServices();
});

test("GET to /api/v1/status shoud return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.updated_at).toBeDefined();
  expect(responseBody.max_connections);

  const parcedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parcedUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("15.6");
  expect(responseBody.dependencies.database.max_connections).toEqual(1000);
  //expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
