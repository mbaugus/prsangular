export class PurchaseRequestLineItem {
    Id: number;
    PurchaseRequestID: number;
    ProductID: number;
    Quantity: number;
    Active: boolean;
    DateCreated: string;
    DateUpdated: string;
    UpdateLastUserID: number;
    constructor(
        Id: number,
        PurchaseRequestID: number,
        ProductID: number,
        Quantity: number,
        Active: boolean,
        DateCreated: string,
        DateUpdated: string,
        UpdateLastUserID: number
    ) {
        this.Id = Id;
        this.PurchaseRequestID = PurchaseRequestID;
        this.ProductID = ProductID;
        this.Quantity = Quantity;
        this.Active = Active;
        this.DateCreated = DateCreated;
        this.DateUpdated = DateUpdated;
        this.UpdateLastUserID = UpdateLastUserID;
    }
}
