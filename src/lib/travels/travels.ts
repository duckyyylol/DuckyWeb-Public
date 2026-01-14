interface Travels {
    [slug1: string]: {
        url: string;

        slugs?: {
            [slug2: string]: {
                url: string;
            }
        }
    };
}

const travels: Travels = {
    github: {
        url: "https://github.com/duckyyylol",
        slugs: {
            "radio": {
                url: "https://github.com/duckyyylol/Cider-NowPlaying/tree/rewrite"
            },
            "web": {
                url: "https://github.com/duckyyylol/DuckyWeb-Public"
            }
        }
    },
    twitch: {
        url: "https://twitch.tv/duckyyylive"
    },
    bluesky: {
        url: "https://bsky.app/profile/duckyyy.lol" 
    },
    towers: {
        url: "https://discord.com/invite/towers",
        slugs: {
            "twitch": {
                url: "https://twitch.tv/eldentowers"
            }
        }
    }
}

export default travels;