export class VendorDocumentModel {
    constructor(
        public id: number,
        public item_id: number,
        public name: string,
        public image: string,
        public date: string,
        public status: string
    ) { }

    static adapt(item: any):{rows:VendorDocumentModel[]} {
        console.log('model item document', item)
        
        let data = [
            new VendorDocumentModel(item.id, 1, 'Id Front Card', item.id_card_front_url, item.createdAt, item.id_card_status),
            new VendorDocumentModel(item.id, 2, 'Id Back Card', item.id_card_back_url, item.createdAt, item.id_card_status),
            new VendorDocumentModel(item.id, 3, 'Bank Front Card', item.bank_card_front_url, item.createdAt, item.bank_card_status),
            new VendorDocumentModel(item.id, 4, 'Bank Back Card', item.bank_card_back_url, item.createdAt, item.bank_card_status),
            new VendorDocumentModel(item.id, 5, 'Menu Card', item.menu_card_url, item.createdAt, item.menu_card_status)
        ]
        return { rows: data }
      
    }
}