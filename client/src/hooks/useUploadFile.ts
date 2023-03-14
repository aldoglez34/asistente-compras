import { useState } from "react";
import { convertStringToNumber, sanitizeString } from "../utils/helpers";
import { uploadPrices } from "../services/PriceLists";

type columnsType = {
  label: string;
  type: "string" | "number";
};

const columns: columnsType[] = [
  { label: "familia", type: "string" },
  { label: "skuPropio", type: "string" },
  { label: "skuProveedor", type: "string" },
  { label: "descripcion", type: "string" },
  { label: "marca", type: "string" },
  { label: "um", type: "string" },
  { label: "listaPrecio", type: "string" },
  { label: "precio", type: "number" },
  { label: "iva", type: "number" },
  { label: "ieps", type: "number" },
  { label: "validoDesde", type: "string" },
  { label: "fechaAlta", type: "string" },
  { label: "contenido", type: "string" },
  { label: "umCont", type: "string" },
  { label: "ratio", type: "string" },
  { label: "umInv", type: "string" },
];

export const useUploadFile = () => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const csvFileToArray = (string: string) => {
    const csvRows = string
      .slice(string.indexOf("\n") + 1)
      .split("\n")
      .filter((row) => !!row.length);
    const array = csvRows.map((i: string) => {
      const values = i.split(",");
      const obj = columns.reduce((acc, cv, idx: number) => {
        const { label, type } = cv;
        const value =
          type === "number"
            ? convertStringToNumber(values[idx])
            : sanitizeString(values[idx]);
        (acc as any)[label] = value;
        return acc;
      }, {});
      return obj;
    });
    return array;
  };

  const uploadData = async (
    name: string,
    file: Blob,
    supplier: string,
    purchaser: string
  ) => {
    const fileReader = new FileReader();
    fileReader.onload = async (event) => {
      const text = event.target?.result;
      const data: any = csvFileToArray(text as any);
      try {
        await uploadPrices({ name, data, purchaser, supplier });
      } catch (err: any) {
        if (err.request.status === 500) {
          setErrorMessage(
            "Un documento con el mismo nombre ya existe, cambia el nombre y vuelve a intentarlo."
          );
          return;
        }
        setErrorMessage(
          "Ocurrió un error al intentar subir el documento, vuelve a intentarlo."
        );
      }
    };
    fileReader.readAsText(file);
  };

  const clearError = () => setErrorMessage(undefined);

  return { clearError, errorMessage, uploadData };
};
