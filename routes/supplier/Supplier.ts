import { requestType, responseType } from "../../types/types";
import { SupplierModel } from "../../models";

export const getAllSuppliers = async (_req: requestType, res: responseType) => {
  try {
    const data = await SupplierModel.find({}).exec();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(422).send("Ocurrió un error.");
  }
};

export const postSupplier = async (req: requestType, res: responseType) => {
  try {
    await SupplierModel.create(req.body).then((res) => res);
    res.status(200).send("Todo bien.");
  } catch (err) {
    console.log(err);
    if ((err as string).includes("E11000"))
      res.status(500).send("Un proveedor con este nombre o correo ya existe.");
    res.status(422).send("Ocurrió un error.");
  }
};
