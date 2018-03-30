export class PurchaseRequestLineItem {
    Id: number;
    PurchaseRequestID: number;
    ProductID: number;
    Quantity: number;
    Active: boolean;
    DateCreated: string;
    DateUpdated: string;
    UpdateLastUserId: number;
    constructor(
        Id: number,
        PurchaseRequestID: number,
        ProductID: number,
        Quantity: number,
        Active: boolean,
        DateCreated: string,
        DateUpdated: string,
        UpdateLastUserId: number
    ) {
        this.Id = Id;
        this.PurchaseRequestID = PurchaseRequestID;
        this.ProductID = ProductID;
        this.Quantity = Quantity;
        this.Active = Active;
        this.DateCreated = DateCreated;
        this.DateUpdated = DateUpdated;
        this.UpdateLastUserId = UpdateLastUserId;
    }
}
