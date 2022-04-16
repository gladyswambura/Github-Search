export class User {
    avater_url:string;
    name:string;
    username:string;
    userbio:string;
    following:number;
    followers:number;
    location:string

    // declare the properties of a github user-form
    constructor(avatar_url: string, name:string, username:string, userbio:string, followers:number, 
        following:number, location:string, numberofRepositories:number) {

    this.avater_url = avatar_url;
    this.name = name;
    this.username = username;
    this.userbio = userbio;
    this.followers = followers;
    this.following = following;
    this.location = location;

    }

   
}
