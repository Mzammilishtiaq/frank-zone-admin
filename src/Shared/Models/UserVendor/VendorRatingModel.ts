export class VendorRatingModel {
    constructor(
        public id: number,
        public review: string,
        public rating: number,
        public date: string,
        public user_id: number,
        public user_name: string,
        public user_image: string
    ) { }

    static adapt(items: any): { rows: VendorRatingModel[], count: any } {
        console.log('items rating vendor', items)
        let data = items.rows.map((item: any) =>
            new VendorRatingModel(
                item.id,
                item.review,
                item.rating,
                item.createdAt,
                item.User.id,
                item.User.name,
                item.User.image_url
            )

        )
        return { rows: data, count: items.count }
    }
}