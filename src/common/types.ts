export interface Credentials {
    email: string;
    password: string;
}

export interface User {
    username: string;
    email: string;
    password: string;
    privilege: BigInt;
}

export interface Subject {
    id: BigInt;
    name: string;
    description: string;
}

export interface Teacher {
    id: BigInt;
    name: string;
    specializedSubjects: Array<Subject>;
}

export interface Indy {
    id: BigInt;
    date: Date;
    hourId: number;
    availableTeachers: Array<Teacher>;
    availableSubjects: Array<Subject>;
}

export interface IndyType {
    id: BigInt;
    name: string;
}

export interface IndyRecord extends Indy {
    id: BigInt;
    type: IndyType;
    teacher: BigInt;
    subjectId: BigInt;
    description: string;
}