export interface User {
    id: number;
    name: string;
    address: string;
}

//utility types: omit partial pick
export type UserFormData = Omit<User, 'id'>;
//Partial: something can be missed
//Pick: specify only the used types
