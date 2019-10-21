import { get } from "./api";

jest.setTimeout(1000 * 10);

it("api gets assets", async () => {
  const assets = await get("/assets");
  expect(assets.length).toBeGreaterThan(0);
});

it("api gets asset", async () => {
  const assets = await get("/assets");
  const asset = assets[0];
  const apiAsset = await get(`/assets/${asset.id}`);
  expect(apiAsset).toEqual(asset);
});

it("gets a not found", async () => {
  const asset = await get(`/assets/foo`);
  expect(asset).toEqual({
    error: { code: 404, message: "Asset not found" }
  });
});
