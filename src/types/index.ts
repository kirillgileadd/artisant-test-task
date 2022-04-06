export interface IProduct {
    product_id: number;
    name: string;
    created_by: IAuthor
    quantity: number,
    quantity_available: number
    initial_price: number
}

export interface IAuthor {
    user_id: number;
    display_name: string;
}