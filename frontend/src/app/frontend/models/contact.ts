export class Contact 
{
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;

    constructor(id: number, name: string, email: string, subject: string, message: string)
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }


}
