import clientPromise from "@/lib/mongodb";

export const fetchPeriods = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return await clientPromise
      .db("accounts")
      .collection("periods")
      .find({})
      .toArray();
  } catch (e) {
    console.error(e);

    return [];
  }
};
