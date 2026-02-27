export const prerender = true;

import { defineBaseMetaTags } from "svelte-meta-tags";
import image from '$lib/assets/Taaheer-Labbe.jpg'

const name = "Music"
const description = "Taaheer Labbe"

export const load = ({url}) => {
    const baseTags = defineBaseMetaTags({
        title: name,
        titleTemplate: '%s - Taaheer Labbe',
        description: description,
        canonical: new URL(url.pathname, url.origin).href,
        openGraph: {
            type: 'website',
            url: new URL(url.pathname, url.origin).href,
            locale: 'en_IN',
            title: name,
            description: description,
            siteName: "Taaheer Labbe Music Producer",
            images: [
                {
                    url: image,
                    alt: 'Taaheer Labbe',
                    secureUrl: image,
                    type: 'image/png'
                }
            ]
        }
    });

    return {...baseTags}
}
