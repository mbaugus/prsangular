export class Vendor {
    Id: number;
    Code: string;
    Name: string;
    Address: string;
    City: string;
    State: string;
    PostalCode: string;
    Email: string;
    IsPreApproved: boolean;
    Active: boolean;
    DateCreated: string;
    DateUpdated: string;
    UpdateLastUserID: number;
    constructor(
        Id: number,
        Code: string,
        Name: string,
        Address: string,
        City: string,
        State: string,
        PostalCode: string,
        Email: string,
        IsPreApproved: boolean,
        Active: boolean,
        DateCreated: string,
        DateUpdated: string,
        UpdateLastUserID: number
    ) {
    }
}
