const OG = "./og"
export const openGraphData = {
    title: 'FLISoL | Festival Latinoameticano de Instalación de Software Libre',
    siteName: 'FLISoL',
    description: "Disfruta del Festival Latinoameticano de Instalación de Software Libre",
    url: `${process.env.HOST}`,
    images: [
        {
            url: `${OG}/banner.png`,
            width: 512,
            height: 256,
        },
        {
            url: `${OG}/alt-banner.png`,
            width: 512,
            height: 512,
            alt: 'Banner FLISoL',
        },
    ],
    locale: `${process.env.LOCATE}`,
    type: 'website',
}

const robots = {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
    },
}

const FAVICON = "./favicon"
const icons = {
    icon: [
        { url: `${FAVICON}/favicon.ico` },
    ],
    shortcut: [
        { url: `${FAVICON}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
    ],
    apple: [
        { url: `${FAVICON}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
    other: [
        {
            rel: 'apple-touch-icon',
            url: `${FAVICON}/apple-touch-icon.png`,
        },
    ],
}

export const defaultData = {
    title: {
        template: "%s | Festival Latinoameticano de Instalación de Software Libre",
        default: "FLISoL | Festival Latinoameticano de Instalación de Software Libre"
    },
    applicationName: "FLISoL",
    keywords: ['Software Libre', 'FLISoL', 'Wiki'],
    authors: [{ name: 'FLISoL' }, { name: 'AndresMpa', url: 'https://github.com/AndresMpa' }],
    creator: 'Andres M. Prieto',
    publisher: 'Comunidad FLISoL',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    metadataBase: new URL(`${process.env.HOST}`),
    manifest: `./site.webmanifest`,
    ...robots,
    ...icons,
}