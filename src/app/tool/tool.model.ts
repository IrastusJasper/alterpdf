
export class Tool {
    public code: string;
    public name: string;
    public label: string;
    public description: string;
    public iconURL: any;
    public addressUrl: any;
    
    constructor(code: string, name: string,label: string,description: string,iconURL: any,addressUrl: any){
        this.code = code;
        this.name = name;
        this.label = label;
        this.description = description;
        this.iconURL = iconURL;
        this.addressUrl = addressUrl;
    }

}
