import { MongoClient, ObjectId } from 'mongodb';
import { MONGODB_URI, MONGODB_DB } from '$env/static/private';

const client = new MongoClient(MONGODB_URI);
await client.connect();

const db = client.db(MONGODB_DB);

// === CHARACTERS ===

export async function getCharacters() {
  const characters = await db.collection('characters').find({}).toArray();
  return characters.map((c) => ({ ...c, _id: c._id.toString() }));
}

export async function createCharacter(character) {
  const result = await db.collection('characters').insertOne(character);
  return result.insertedId.toString();
}

export async function deleteCharacter(id) {
  await db.collection('characters').deleteOne({ _id: new ObjectId(id) });
}

// === PLANETS ===

export async function getPlanets() {
  const planets = await db.collection('planets').find({}).toArray();
  return planets.map((p) => ({ ...p, _id: p._id.toString() }));
}

export async function createPlanet(planet) {
  const result = await db.collection('planets').insertOne(planet);
  return result.insertedId.toString();
}

export async function deletePlanet(id) {
  await db.collection('planets').deleteOne({ _id: new ObjectId(id) });
}

// === SPACESHIPS ===
export async function getSpaceships() {
  const spaceships = await db.collection('spaceships').find({}).toArray();
  return spaceships.map((s) => ({ ...s, _id: s._id.toString() }));
}

export async function createSpaceship(spaceship) {
  const result = await db.collection('spaceships').insertOne(spaceship);
  return result.insertedId.toString();
}

export async function deleteSpaceship(id) {
  await db.collection('spaceships').deleteOne({ _id: new ObjectId(id) });
}