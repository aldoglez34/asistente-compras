import { requestType, responseType } from "../../types/types";
import { PriceListModel } from "../../models";
import { Types } from "mongoose";

export const getAllMyPriceLists = async (
  req: requestType,
  res: responseType
) => {
  try {
    const data = await PriceListModel.find({
      purchaser: new Types.ObjectId(req.params.purchaserId),
    }).exec();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(422).send("Ocurrió un error.");
  }
};

export const getOnePriceLists = async (req: requestType, res: responseType) => {
  try {
    const data = await PriceListModel.findById(req.params.priceListId).exec();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(422).send("Ocurrió un error.");
  }
};

export const postPriceList = async (req: requestType, res: responseType) => {
  try {
    await PriceListModel.create(req.body).then((res) => res);
    res.status(200).send("Todo bien.");
  } catch (err) {
    console.log(err);
    if ((err as string).includes("E11000"))
      res.status(500).send("Una lista de precios con este nombre ya existe.");
    res.status(422).send("Ocurrió un error.");
  }
};
