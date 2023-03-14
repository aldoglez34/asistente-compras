export type PurchaserType = {
  name: string;
  firstSurname: string;
  secondSurname: string;
  email: string;
  registeredAt: Date;
  firebaseUid: string;
  pricesLists: any[];
  suppliers: any[];
};

export type PriceListType = {
  name: string;
  createdAt: Date;
  data: [
    {
      familia: string;
      skuPropio: string;
      skuProveedor: string;
      descripcion: string;
      marca: string;
      um: string;
      listaPrecio: string;
      precio: number;
      iva: number;
      ieps: number;
      validoDesde: string;
      fechaAlta: string;
      contenido: string;
      umCont: string;
      ratio: string;
      umInv: string;
    }
  ];
};

export type SupplierType = {
  name: string;
  registeredAt: Date;
  email: string;
  firebaseUid: string;
  priceLists: any[];
};

export type uploadPriceListType = {
  name: string;
  purchaser: string;
  supplier: string;
  data: PriceListType[];
};
