export class OrderProfileManagement {
    constructor(
        public id: number,
        public order_id: number,
        public vendor_id:number,
        public date: string,
        public time: string,
        public customer_name: string,
        public address: string,
        public state: string,
        public orderline: OrderItem[],
        public country: string,
        public city: string
    ) { }

    static adapt(items: any): OrderProfileManagement {
        console.log('item order', items)
        return new OrderProfileManagement(
            items?.id,
            items?.aggregate_order_id,
            items?.vendor_id,
            items?.createdAt,
            items?.createdAt,
            items?.Vendor.business_name,
            items?.shipping_address,
            items?.state,
            items?.OrderLines.map((item: any) => ({
                id: item?.id,
                quantity: item?.quantity,
                price: item?.price,
                product_name: item?.ProductVariant.Product.name,
                category_name: item?.ProductVariant.Product.Category.name,
                image: item?.ProductVariant.Product.Category.image_url,
                webimage: item?.ProductVariant.Product.Category.web_image_url,
                ProductOptions: item?.ProductVariant.ProductOptions.map((sub_item: any) =>
                ({
                    id: sub_item.id,
                    AttributeOption_id: sub_item.AttributeOption.id,
                    AttributeOption_name: sub_item.AttributeOption.name,
                    ProductAttribute_id: sub_item.ProductAttribute.id,
                    VendorAttribute_id: sub_item.VendorAttribute.id,
                    VendorAttribute_name: sub_item.VendorAttribute.name
                }))
            })),
            items.Vendor.DefaultShop.country,
            items.Vendor.DefaultShop.city
        )
    }
}

interface OrderItem {
    id: string,
    quantity: string,
    price: string
    product_name: string,
    category_name: string,
    image: string,
    webimage: string,
    ProductOptions: OrderSubItem[]
}

interface OrderSubItem {
    id: number,
    AttributeOption_id: number,
    AttributeOption_name: string,
    ProductAttribute_id: number,
    VendorAttribute_id: number,
    VendorAttribute_name: string
}



export class VendorIdModel {
    constructor(
        public id: number,
        public phone: string,
    ) { }

    static adapt(item: any): VendorIdModel {
        return new VendorIdModel(
            item.id,
            item.phone,
        )
    }
}
