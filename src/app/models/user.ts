export class User {
    Id: number;
    Username: string;
    Password: string;
    Firstname: string;
    Lastname: string;
    Phone: string;
    Email: string;
    IsReviewer: boolean;
    IsAdmin: boolean;
    Active: boolean;
    SessionId: string;
    UpdateLastUserId: number;
    constructor(
        Id: number,
        Username: string,
        Password: string,
        Firstname: string,
        Lastname: string,
        Phone: string,
        Email: string,
        IsReviewer: boolean,
        IsAdmin: boolean,
        Active: boolean,
        UpdateLastUserId: number) {
            this.Id = Id;
            this.Username = Username;
            this.Password = Password;
            this.Firstname = Firstname;
            this.Lastname = Lastname;
            this.Phone = Phone;
            this.Email = Email;
            this.IsReviewer = IsReviewer;
            this.IsAdmin = IsAdmin;
            this.Active = Active;
            this.UpdateLastUserId = UpdateLastUserId;
        }
}
