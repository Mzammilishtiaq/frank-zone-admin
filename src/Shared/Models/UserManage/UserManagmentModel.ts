export class UserManagmentModel {
    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public email: string,
        public address: string,
        public status : string,
    ) {}
    
    static adapt(item: any): { rows: UserManagmentModel[], count: number } {
        // console.log('items', item);
        let data = item.rows.map(
            (item: any,index:number) =>
                new UserManagmentModel(
                    item.id,
                    item.name,
                    item.phone,
                    item.email,
                    item?.UserAddresses&&item?.UserAddresses.map((address:any)=>
                    address?.location
                    ),
                    item.status,
                )
        );

        return { rows: data, count: item.count };
    }
}
