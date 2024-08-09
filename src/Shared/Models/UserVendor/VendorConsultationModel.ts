export class VendorConsultationModel {
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public phone: string,
        public email: string,
        public accountStatus: string
    ) { }
    static adapt(items: any): { rows: VendorConsultationModel[], count: any } {
        let data = items.rows.map((item: any) =>
            new VendorConsultationModel(
                item.id,
                item.firstname,
                item.lastname,
                item.phone,
                item.email,
                item.accountStatus
            )
        )

       return { rows: data, count: items.count }
    }

}