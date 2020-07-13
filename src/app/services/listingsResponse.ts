export class Listing {
    Price: string;
    Bedrooms: string;
    Address: string;
    Photos: Photo[];
    PhotoCount: number;
}

export class Photo {
    HighResPath: string;
    MedResPath: string;
    LowResPath: string;
}