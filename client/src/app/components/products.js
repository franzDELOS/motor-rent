import Image from 'next/image'
import {kawasaki , kawasaki2 , kymc0 , MIO_FAZZIO , YAMAHA_MT } from '../components/images/image.js'


const myMoto = [
    {
        id: 1,
        name: 'Kawasaki Ninja 650',
        rent: '1200',
        image : kawasaki,
        description:'Superbly balanced and extremely exciting, the Ninja 650 features a 650cc Parallel Twin engine with a strong low-mid range focus and a remarkably lightweight chassis in a slim, middleweight package. Supersport-like nimble handling, direct feel and strong acceleration are complemented by easy-to-manage power delivery and rider-friendly maneuverability, offering an ideal blend of sporty performance and everyday versatility sure to satisfy everyone from new to more experienced riders. Sharp styling strengthens its Ninja family image, reflecting its highly evocative character.',
        type: '6-speed, return ',
    },
    {
        id: 2,
        name: 'KAWASAKI W800 CAFE',
        rent: '850',
        image : kawasaki2,
        description:'The W800 Cafe is the latest evolution of the brand a brand that spans 50 years. With numerous parts numerous parts updated from the original W1 and compared to the standard W800 – the W800 Cafe is a retro model that has been thoroughly modernized to deliver rider-friendly machines with easy handling and good stability on the highway.',
        type: '5-speed'

    },
    {
        id: 3,
        name: 'KYMCO KRV 180I DDS',
        rent: '690',
        image : kymc0,
        description:'KYMCO Launches the new version of KRV to enter the market. Kymco Renew your Vision – KRV 180i is a compact sport recreational vehicle equipped with comfort, convenience, handling, and above all, performance.',
        type:'CVT'

    },
    {
        id: 4,
        name: 'Kawasaki Ninja 6503',
        rent: '1200',
        image : kawasaki,
        description: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',

    },
    {
        id: 5,
        name: 'KAWASAKI W800 CAFE1',
        rent: '900',
        image : kawasaki2,
        description: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',

    },
    {
        id: 6,
        name: 'KYMCO KRV 180I DDS2',
        rent: '1000',
        image : kymc0,
        description: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',

    },
    {
        id: 7,
        name: 'YAMAHA MIO FAZZIO',
        rent: '700',
        image : YAMAHA_MT,
        description: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',

    },
    {
        id: 8,
        name: 'YAMAHA MIO SPORTY',
        rent: '400',
        image : YAMAHA_MT,
        description: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',

    },
    {
        id: 9,
        name: 'YAMAHA MT-10SP',
        rent: '700',
        image : YAMAHA_MT,
        description: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',

    },
    {
        id: 10,
        name: 'YAMAHA NMAX ABS',
        rent: '690',
        image : MIO_FAZZIO,
        description: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',

    },
    {
        id: 11,
        name: 'YAMAHA YZF-R3',
        rent: '660',
        image : MIO_FAZZIO,
        description: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',

    },
    
]

export default myMoto