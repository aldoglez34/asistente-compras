export const convertStringToNumber = (str: string = "") =>
  Number(str.replace("$", "").trim());

export const sanitizeString = (str: string = "") =>
  str.replace("\r", "").trim();

export const getFullName = (
  name?: string,
  firstSurname?: string,
  secondSurname?: string
) => `${name ?? ""} ${firstSurname ?? ""} ${secondSurname ?? ""}`.trim();
