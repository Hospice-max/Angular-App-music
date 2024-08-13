export interface Albums {
    id: string;
    ref: string;
    name: string;
    title: string;
    description: string;
    duration: number;
    url: string;
    like?: string;
    tags?: string[];
    status: string;
}

export class aside {

    constructor(
        public    id: string,
        public   ref: string,
        public   name: string,
        public   title: string,
        public   description: string,
        public   duration: number,
        public   url: string,
        public   status: string , 
        public   like?: string,
        public   tags?: string[]){}
}