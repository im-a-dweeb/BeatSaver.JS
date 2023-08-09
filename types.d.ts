// mapTypes.d.ts
export interface MapInfo {
    name: string;
    id: number;
    description: string;
    uploader: {
        id: number;
        name: string;
        hash: string;
        avatar: string;
        type: string;
        admin: boolean;
        curator: boolean;
        playlistUrl: string;
    };
    metadata: {
        bpm: number;
        duration: number;
        songName: string;
        songSubName: string;
        songAuthorName: string;
        levelAuthorName: string;
    }
    stats: {
        plays: number;
        downloaded: number;
        upvotes: number;
        downvotes: number;
        score: number;
        reviews: number;
    }
    uploaded: string;
    automapper: boolean;
    ranked: boolean;
    qualified: boolean;
    createdAt: string;
    updatedAt: string;
    lastPlublishedAt: string;
    tags: string[];
    bookmarked: false;
}
