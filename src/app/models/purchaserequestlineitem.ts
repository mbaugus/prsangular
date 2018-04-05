export class PurchaseRequestLineItem {
    Id: number;
    PurchaseRequestId: number;
    ProductID: number;
    Quantity: number;
    Active: boolean;
    DateCreated: string;
    DateUpdated: string;
    UpdateLastUserId: number;
    constructor(
        Id: number,
        PurchaseRequestId: number,
        ProductID: number,
        Quantity: number,
        Active: boolean,
        DateCreated: string,
        DateUpdated: string,
        UpdateLastUserId: number
    ) {
        this.Id = Id;
        this.PurchaseRequestId = PurchaseRequestId;
        this.ProductID = ProductID;
        this.Quantity = Quantity;
        this.Active = Active;
        this.DateCreated = DateCreated;
        this.DateUpdated = DateUpdated;
        this.UpdateLastUserId = UpdateLastUserId;
    }
}
