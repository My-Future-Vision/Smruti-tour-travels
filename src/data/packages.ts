import { getImagePath } from '../utils/imagePaths';

export interface Package {
    id: string;
    name: string;
    duration: string;
    price: string;
    image: string;
    images?: string[];
    locations: string[];
    inclusions: string[];
    description: string;
    itinerary?: {
        day: string; // e.g., "Day 1"
        title: string; // e.g., "Gopalpur Sightseeing"
        places: string[];
    }[];
}

export const packages: Package[] = [
    {
        id: 'daringbadi-gopalpur-2n3d',
        name: 'Daringbadi & Gopalpur Tour',
        duration: '2 Nights / 3 Days',
        price: 'On Request',
        image: getImagePath('/images/tours/daringbadi-2n3d.jpg'),
        images: [
            getImagePath('/images/tours/daringbadi-2n3d.jpg'),
            getImagePath('/images/tours/daringbadi-gallery-1.jpg'),
            getImagePath('/images/tours/daringbadi-gallery-2.jpg'),
            getImagePath('/images/tours/daringbadi-gallery-3.jpg'),
            getImagePath('/images/tours/daringbadi-gallery-4.jpg'),
            getImagePath('/images/tours/daringbadi-gallery-5.jpg'),
            getImagePath('/images/tours/daringbadi-gallery-6.jpg'),
        ],
        locations: ['Gopalpur', 'Chilika Lake', 'Daringbadi', 'Tara Tarini Temple'],
        inclusions: ['Lodging (1N Gopalpur, 1N Daringbadi)', 'Fooding', 'Sightseeing', 'Transport'],
        description: 'A perfect 3-day getaway covering the serene Gopalpur beach and the scenic hill station of Daringbadi.',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Gopalpur Sightseeing',
                places: [
                    'Gopalpur Sea Beach',
                    'Tara Tarini Temple',
                    'Rambha - Chilika Lake',
                    'Tampara Lake',
                    'Aryapalli Sea Beach'
                ]
            },
            {
                day: 'Day 2',
                title: 'Daringbadi Sightseeing',
                places: [
                    'Maa Karanjai Temple',
                    'Khunteswari Temple',
                    'Sorada Dam',
                    'Rushikulya River',
                    'Hulu Hulu Ganda',
                    'Daringbadi Forest',
                    'Miguma Waterfall',
                    'Mandasaru Valley',
                    'Patabandha Waterfall',
                    'Sunset Point'
                ]
            },
            {
                day: 'Day 3',
                title: 'Nearby Places & Departure',
                places: [
                    'Coffee Garden',
                    'Pine Forest',
                    'Rainbow Waterfall',
                    'Pangali Valley',
                    'Midubanda Waterfall',
                    'Sonapur Valley',
                    'Brahmanidevi Waterfall',
                    'Khasada Waterfall',
                    'Jirang Buddhist Monastery',
                    'Taptapani Hot Spring',
                    'Deer Park'
                ]
            }
        ]
    },
    {
        id: 'daringbadi-gopalpur-3n4d',
        name: 'Daringbadi & Gopalpur Tour (Extended)',
        duration: '3 Nights / 4 Days',
        price: 'On Request',
        image: getImagePath('/images/tours/daringbadi-3n4d.jpg'),
        images: [
            getImagePath('/images/tours/daringbadi-3n4d.jpg'),
            getImagePath('/images/tours/daringbadi-gallery-4.jpg'),
            getImagePath('/images/tours/daringbadi-gallery-5.jpg'),
            getImagePath('/images/tours/daringbadi-gallery-6.jpg'),
        ],
        locations: ['Daringbadi', 'Gopalpur', 'Chilika Lake', 'Jirang Monastery'],
        inclusions: ['Lodging (2N Daringbadi, 1N Gopalpur)', 'Fooding', 'Sightseeing', 'Transport'],
        description: 'An extensive 4-day tour exploring the Kashmir of Odisha (Daringbadi) depth and the coastal beauty of Gopalpur.',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Way to Daringbadi',
                places: [
                    'Maa Karanjai Temple',
                    'Khunteswari Temple',
                    'Sorada Dam',
                    'Rushikulya River',
                    'Hulu hula Ganda (Ram pada)',
                    'Daringbadi Forest',
                    'View Point',
                    'Coffee Garden',
                    'Pine Forest',
                    'Sunset point'
                ]
            },
            {
                day: 'Day 2',
                title: 'Daringbadi Local Sight Scene',
                places: [
                    'Butterfly Park',
                    'Hill view Park',
                    'Emu Park',
                    'Lovers Point',
                    'Raikia Forest',
                    'Miguma Waterfall',
                    'Mandasaru Valley Eco Tourism',
                    'Daringbadi 360 View Point'
                ]
            },
            {
                day: 'Day 3',
                title: 'End of Daringbadi Sight Scene',
                places: [
                    'Rainbow Waterfall',
                    'Pangali valley Hill Top',
                    'Midubanda Waterfall',
                    'Sonapur Valley',
                    'Brahmuni gaon Forest',
                    'Brahmanidei Waterfall',
                    'Khasada Waterfall',
                    'Jiranga Buddhists Monastery',
                    'Taptapani Hotspring',
                    'Deer Park',
                    'Gopalpur Sea Beach'
                ]
            },
            {
                day: 'Day 4',
                title: 'Gopalpur Sight Scene',
                places: [
                    'Taratarini Temple',
                    'Rambha & Chilika Lake',
                    'Tampera Lake',
                    'Aryapalli Sea Beach',
                    'Gokuldham Temple'
                ]
            }
        ]
    }
];
