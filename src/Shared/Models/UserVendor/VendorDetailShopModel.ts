export class VendorDetailShopModel {
    constructor(
        public id: number,
        public businessName: string,
        public vendorShop: VendorShopItem[],
    ) { }

    static adapt(items: any): { rows: VendorDetailShopModel[] } {
        console.log('model data shop', items)
        let data = items.map(
            (item: any) =>
                new VendorDetailShopModel(
                    item?.id,
                    item?.business_name,
                    item?.VendorShops?.map((shop: any) => ({
                        id: shop?.id,
                        businessEmail: shop?.business_email,
                        landlineNumber: shop?.landline_number,
                        address: shop?.address,
                        city: shop?.city,
                        country: shop?.country,
                        countryCode: shop?.country_code,
                        postalCode: shop?.postal_code,
                        tax_no: shop?.tax_no,
                        quotes: shop?.quotes,
                        imageUrl: shop?.image_url,
                        coverUrl: shop?.cover_url,
                        isdefault:shop?.is_default
                    }))
                )
        )


        return { rows: data }
    }
}

interface VendorShopItem {
    id: number,
    businessEmail: string,
    landlineNumber: string,
    address: string,
    city: string,
    country: string,
    countryCode: string,
    postalCode: string,
    taxNo: string,
    quotes: string,
    imageUrl: string,
    coverUrl: string,
    isdefault:number
}

