export class VendorQuestionModel {
    constructor(
        public id: number,
        public answer: string,
        public question_id: number,
        public question_name: string
    ) { }

    static adapt(item: any): { rows: VendorQuestionModel[], count: number } {
        let data = item.rows.map(
            (item: any) =>
                new VendorQuestionModel(
                    item.id,
                    item.answer,
                    item.Question.id,
                    item.Question.question
                )
        )

        return { rows: data, count: item.count }
    }
}