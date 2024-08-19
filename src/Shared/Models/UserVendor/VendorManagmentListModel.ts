export class VendorManagmentListModel {
    constructor(
        public id: number,
        public accountstatus: string,
        public email: string,
        public firstname: string,
        public lastname: string,
        public phone: string
    ) { }

    static adapt(item: any): { rows: VendorManagmentListModel[], count: any} {
        let data = item.rows.map(
            (item: any, index:number) =>
                new VendorManagmentListModel(
                    item?.id,
                    item?.accountStatus,
                    item?.email,
                    item?.first_name,
                    item?.last_name,
                    item?.phone
                )

        )
        return { rows: data, count: item?.count }

    }
}