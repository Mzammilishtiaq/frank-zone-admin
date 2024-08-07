

export class UserManagmentRatingModel {
    constructor(
        public rating: number,
        public orderid: number,
        public review: string,
        public date:string,
        public vendorbusinessname: string,
        public vendorimageurl: string,
        public vendorshops: ShopItemsModel[],
        public order: number
    ) { }

    static adapt(item: any): { data: UserManagmentRatingModel[] } {
        let data = item.map(
            (item: any) =>
                new UserManagmentRatingModel(
                    item.rating,
                    item.order_id,
                    item.review,
                    item.createdAt,
                    item.Vendor.business_name,
                    item.Vendor.image_url,
                    item.Vendor.VendorShops,
                    item.Order.total_items,
                )
        )
        return { data: data }
    }


}

interface ShopItemsModel {
    city: string,
    country: string
}