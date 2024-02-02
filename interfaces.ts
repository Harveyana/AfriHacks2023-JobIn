
export interface experience {
    yearStarted:string,
    yearEnded:string,
    title:string,
    company:string,
    location:string,
    url:string,
    descriptions:string[]
}

export interface education {
    yearStarted:string,
    yearEnded:string,
    certification:string,
    institution:string,
    location:string,
    url:string,
    description:string
}

export interface project {
    title:string,
    year:string,
    client:string,
    url:string,
    description:string
}

export interface certificate {
    yearIssued:string,
    yearExpires:string,
    name:string,
    organisation:string,
    url:string,
    description:string
}

export interface skill {
    name:string,
    description:string
}

export interface contact {
    type:string,
    value:string
}


export interface user {
    uid:string;
    displayName:string;
    email:string;
    phoneNumber:string;
    photoUrl:string;
    isSetupCompleted:boolean;
    userDetails:(experience[]|education[]|project[]|certificate[]|skill[]|contact[])
}