import clientPromise from "./db";

export async function getUserByEmail(email) {
  try {
    const client = await clientPromise;
    const db = client.db("auth");
    const user = await db.collection("users").findOne({ email: email });
    return user;
  } catch (err) {
    console.log(err);
  }
}
