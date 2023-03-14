import { createRandomDate } from "../helpers/helpers";

export const suppliersMocks = [
  {
    name: "Supply Depot",
    registeredAt: createRandomDate(),
    email: "aldo.solano@supplydepot.com",
    address: "691 Marconi Lane Milwaukee, WI 53204",
    phone: "+1 (134) 959-2153",
    firebaseUid: "ErOHyStejPeVd6LpEIAxSoylOrN2",
  },
  {
    name: "Crown Distributing",
    registeredAt: createRandomDate(),
    email: "maggie.delarosa@crowndistributing.com",
    address: "7288 N. George Drive Harrisonburg, VA 22801",
    phone: "+1 (255) 194-6026",
    firebaseUid: "nkLyDc7NR4hrz5byx0nPtsZdKpm2",
  },
];
