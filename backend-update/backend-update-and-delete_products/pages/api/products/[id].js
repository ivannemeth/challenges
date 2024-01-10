import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  console.log("id", id);

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }

  if (request.method === "PUT") {
    console.log("request body:", request.body);
    await Product.findByIdAndUpdate(id, request.body);

    response
      .status(200)
      .json({ status: `Product ${id} successfully updated!` });
  }
}
