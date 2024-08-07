export class UserManagmentDetailModel {
    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public email: string,
        public image: string,
        public address: string,
        public status:string
    ) { }

    static adapt(item: any): UserManagmentDetailModel {
        return new UserManagmentDetailModel(
            item?.id,
            item?.name,
            item?.phone,
            item?.email,
            item?.image_url,
            item?.UserAddresses && item?.UserAddresses.map((address: any) => address.location),
            item.status,
        )

    }
}