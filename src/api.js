import faker from "faker/locale/en";

/**
 * Sleep a random amount of time, using promises
 * Allows easy faking of sync network responses using await
 */
function wait() {
  return new Promise(resolve => {
    const ms = faker.random.number({ min: 1000, max: 3000 });
    setTimeout(resolve, ms);
  });
}

const assets = Array(25)
  .fill(true)
  .map(() => {
    return {
      id: faker.random.uuid(),
      hostname: faker.internet.domainWord() + "Computer",
      os: faker.random.arrayElement(["Windows", "Mac OS", "Ubuntu"]),
      ip: faker.internet.ip(),
      enrolledAt: faker.date.past()
    };
  });

/**
 * A fake API utiilty.
 * get(url) returns a promise with results.
 * Is async, and will wait a random amount of time
 * For GET multiple items API, an array of objects is returned
 * For GET of a single item `/<thingname>/<id>` an object is returned
 * If an item is not found, an object in format `{ error: { code } }` is returned
 * @param {string} url
 */
export async function get(url) {
  await wait();
  const [noun, id] = url.split("/").filter(part => part.trim() !== "");
  if (noun === "assets") {
    if (id) {
      const asset = assets.find(a => a.id === id);
      if (asset) {
        return asset;
      }
      return { error: { code: 404, message: "Asset not found" } };
    }
    return assets;
  }
}

export default { get };
