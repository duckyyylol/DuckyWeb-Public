import socialIcon_Discord from "$lib/assets/icons/discord.png";
import socialIcon_Bluesky from "$lib/assets/icons/bluesky.png";
import socialIcon_Github from "$lib/assets/icons/github.png";
import socialIcon_Twitch from "$lib/assets/icons/twitch.png";
import socialIcon_Email from "$lib/assets/icons/email.png";

export interface Config {
    username: string;
    role: string | null;
    pronouns: string[];
    socials: {
        name: string;
        label: string;
        img: string;
        withMention: boolean;
        url?: string;
    }[];
}

const config: Config = {
    username: "ducky",
    pronouns: ["she", "her"],
    role: "a worthy opponent, you are",
    socials: [
        {
            withMention: true,
            name: "Discord",
            label: "ducky.lol",
            img: socialIcon_Discord,
        },
        {
            withMention: true,
            name: "GitHub",
            label: "duckyyylol",
            img: socialIcon_Github,
        },
        {
            withMention: true,
            name: "Twitch",
            label: "duckyyylive",
            img: socialIcon_Twitch,
        },
        {
            withMention: true,
            name: "Bluesky",
            label: "duckyyy.lol",
            img: socialIcon_Bluesky,
        },
        {
            withMention: false,
            name: "Email",
            label: "[3 ⓧ 31]@[this domain].wiki",
            img: socialIcon_Email,
            url: "#",
        },
    ],
}

export default config;