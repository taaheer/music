import { definePageMetaTags } from "svelte-meta-tags";

const title = "License";
const description = "License"

export const load = () => {
    const pageTags = definePageMetaTags({
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description
        }
    });

    return {...pageTags};
};

