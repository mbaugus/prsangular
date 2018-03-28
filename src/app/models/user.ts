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
        Active: boolean) {
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
        }
}
