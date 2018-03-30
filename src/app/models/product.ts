import { Vendor } from './vendor';

export class Product {
    Vendor: Vendor;
    Id: number;
    VendorID: number;
    PartNumber: string;
    Name: string;
    Price: number;
    Unit: string;
    PhotoPath: string;
    Active: boolean;
    DateCreated: string;
    DateUpdated: string;
    UpdatedLastUserId: number;

    constructor(
        Id: number,
        VendorID: number,
        PartNumber: string,
        Name: string,
        Price: number,
        Unit: string,
        PhotoPath: string,
        Active: boolean,
        DateCreated: string,
        DateUpdated: string,
        UpdatedLastUserId: number,
        Vendor: Vendor
    ) {
        this.Id = Id;
        this.VendorID = VendorID;
        this.PartNumber = PartNumber;
        this.Name = Name;
        this.Price = Price;
        this.Unit = Unit;
        this.PhotoPath = PhotoPath;
        this.Active = Active;
        this.DateCreated = DateCreated;
        this.DateUpdated = DateUpdated;
        this.UpdatedLastUserId = UpdatedLastUserId;
        this.Vendor = Vendor;
    }
}
