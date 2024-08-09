export class OrderManagementModel {
    constructor(
        public id: string,
        public items: number,
        public quantity: string,
        public grand_total: number,
        public order_placed_at: string,
        public is_active: number,
        public name: string

    ) { }

    static adapt(items:any):{rows:OrderManagementModel[], count:any}{
let data= items.rows.map(
    (item:any) =>
        new OrderManagementModel(
            item.id,
            item.items,
            item.quantity,
            item.grand_total,
            item.order_placed_at,
            item.is_active,
            item.User.name

        )
)
        return {rows:data,count: items.count}
    }
}