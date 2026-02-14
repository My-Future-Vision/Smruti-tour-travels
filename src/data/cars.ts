import { getImagePath } from '../utils/imagePaths';

export interface Car {
    id: string;
    name: string;
    type: string;
    pricePerKm: number;
    coverImage: string; // High-quality marketing image
    image: string; // Primary real image for details
    images?: string[]; // Gallery of real images
    features: string[];
    description: string;
}

export const cars: Car[] = [
    {
        id: 'swift-dzire',
        name: 'Swift Dzire',
        type: 'Sedan',
        pricePerKm: 10,
        coverImage: getImagePath('/images/cars/swift-dzire-cover.jpg'),
        image: getImagePath('/images/cars/swift-dzire-1.jpg'),
        images: [
            getImagePath('/images/cars/swift-dzire-1.jpg'),
            getImagePath('/images/cars/swift-dzire-2.jpg'),
            getImagePath('/images/cars/swift-dzire-3.jpg')
        ],
        features: ['AC', '4 Seater', 'Music System', 'Comfortable Legroom'],
        description: 'The Swift Dzire is a perfect blend of style and comfort, ideal for small families and business trips.',
    },
    {
        id: 'innova',
        name: 'Toyota Innova',
        type: 'SUV',
        pricePerKm: 15,
        coverImage: getImagePath('/images/cars/innova-cover.jpg'),
        image: getImagePath('/images/cars/innova-1.jpg'),
        images: [
            getImagePath('/images/cars/innova-1.jpg'),
            getImagePath('/images/cars/innova-2.jpg'),
            getImagePath('/images/cars/innova-3.jpg')
        ],
        features: ['AC', '7 Seater', 'Ample Boot Space', 'High Comfort'],
        description: 'Toyota Innova offers a spacious and comfortable ride, making it the best choice for long distance travel with family.',
    },
    {
        id: 'innova-crysta',
        name: 'Innova Crysta',
        type: 'Premium SUV',
        pricePerKm: 16,
        coverImage: getImagePath('/images/cars/innova-crysta-cover.jpg'),
        image: getImagePath('/images/cars/innova-crysta-1.jpg'),
        images: [
            getImagePath('/images/cars/innova-crysta-1.jpg'),
            getImagePath('/images/cars/innova-crysta-2.jpg')
        ],
        features: ['AC', '7 Seater', 'Premium Interiors', 'GPS Navigation', 'Airbags'],
        description: 'Experience luxury with the Innova Crysta. Known for its premium interiors and superior ride quality.',
    },
    {
        id: 'honda-city',
        name: 'Honda City',
        type: 'Premium Sedan',
        pricePerKm: 15,
        coverImage: getImagePath('/images/cars/honda-city-cover.jpg'),
        image: getImagePath('/images/cars/honda-city-1.jpg'),
        images: [
            getImagePath('/images/cars/honda-city-1.jpg'),
            getImagePath('/images/cars/honda-city-2.jpg')
        ],
        features: ['AC', '5 Seater', 'Luxury Interiors', 'Smooth Drive'],
        description: 'Honda City defines premium comfort and style. Perfect for weddings and corporate travel.',
    },
    {
        id: 'etios',
        name: 'Toyota Etios',
        type: 'Sedan',
        pricePerKm: 11, // Estimated
        coverImage: getImagePath('/images/cars/etios-cover.jpg'),
        image: getImagePath('/images/cars/etios-1.jpg'),
        images: [
            getImagePath('/images/cars/etios-1.jpg'),
            getImagePath('/images/cars/etios-2.jpg')
        ],
        features: ['AC', '4 Seater', 'Spacious Boot', 'Economy'],
        description: 'Toyota Etios is known for its reliability and spacious cabin, great for city and outstation trips.',
    },
    /*
    {
        id: 'van',
        name: 'Force Traveller / Winger', // Assuming "van" implies this or similar
        type: 'Van',
        pricePerKm: 22, // Estimated
        coverImage: getImagePath('/images/cars/force-cover.jpg'),
        image: getImagePath('/images/cars/traveller-1.jpg'),
        images: [
            getImagePath('/images/cars/traveller-1.jpg'),
            getImagePath('/images/cars/traveller-2.jpg')
        ],
        features: ['AC', '12+ Seater', 'Pushback Seats', 'Group Travel'],
        description: 'Ideal for large groups and pilgrimages. Travel together with comfort.',
    },
    */
];
