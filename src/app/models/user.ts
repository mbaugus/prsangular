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

    GetRole(): string {
        if (this.IsAdmin) {
            return 'admin';
        } else if (this.IsReviewer) {
            return 'review';
        } else {
            return 'user';
        }
    }

    Copy(user: User) {
        this.Id = user.Id;
        this.Username = user.Username;
        this.Password = user.Password;
        this.Firstname = user.Firstname;
        this.Lastname = user.Lastname;
        this.Phone = user.Phone;
        this.Email = user.Email;
        this.IsReviewer = user.IsReviewer;
        this.IsAdmin = user.IsAdmin;
        this.Active = user.Active;
        this.UpdateLastUserId = user.UpdateLastUserId;
        this.SessionId = user.SessionId;
    }
}
