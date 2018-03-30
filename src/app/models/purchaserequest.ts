import { User } from './user';
import { PurchaseRequestLineItem } from './purchaserequestlineitem';
export class PurchaseRequest {
    Id: number;
    UserId: number;
    Description: string;
    Justification: string;
    DateNeeded: string;
    DeliveryMode: string;
    Status: string;
    Total: number;
    Active: boolean;
    ReasonForRejection: string;
    DateCreated: string;
    DateUpdated: string;
    UpdateLastUserId: number;
    User: User;
    PurchaseRequestLineItems: {};
    constructor(
        Id: number,
        UserId: number,
        Description: string,
        Justification: string,
        DateNeeded: string,
        DeliveryMode: string,
        Status: string,
        Total: number,
        Active: boolean,
        ReasonForRejection: string,
        DateCreated: string,
        DateUpdated: string,
        UpdateLastUserId: number,
        User: User,
        PurchaseRequestLineItems: {}
    ) {
        this.Id = Id;
        this.UserId = UserId;
        this.Description = Description;
        this.Justification = Justification;
        this.DateNeeded = DateNeeded;
        this.DeliveryMode = DeliveryMode;
        this.Status = Status;
        this.Total = Total;
        this.Active = Active;
        this.ReasonForRejection = ReasonForRejection;
        this.DateCreated = DateCreated;
        this.DateUpdated = DateUpdated;
        this.UpdateLastUserId = UpdateLastUserId;
        this.User = User;
        this.PurchaseRequestLineItems = PurchaseRequestLineItems;
    }
}
