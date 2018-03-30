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
    UpdateLastUserId: number;
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
        UpdateLastUserId: number
    ) {
        this.Id = Id;
        this.Name = Name;
        this.Address = Address;
        this.State = State;
        this.City = City;
        this.PostalCode = PostalCode;
        this.Email = Email;
        this.IsPreApproved = IsPreApproved;
        this.Active = Active;
        this.DateCreated = DateCreated;
        this.DateUpdated = DateUpdated;
        this.UpdateLastUserId = UpdateLastUserId;
    }
}
