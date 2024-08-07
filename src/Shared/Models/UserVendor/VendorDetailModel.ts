export class VendorDetailModel {
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public phone: string,
        public email: string,
        public image: string
    ) { }

    static adapt(item: any): VendorDetailModel {
        return new VendorDetailModel(
            item.id,
            item.first_name,
            item.last_name,
            item.phone,
            item.email,
            item.image_url
        )
    }
}