const sourceList = [
    {
        id: 0,
        title: 'RSS',
        thumbnail: 'https://4vector.com/i/free-vector-rss-logo-clip-art_117279_Rss_Logo_clip_art_hight.png'
    },
    {
        id: 1,
        title: 'Twitter',
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/social-icons-5/606/Twitter.png'
    }
];

const getSourceById = (id: number) => {
    return sourceList.find((item) => {
        return id === item.id;
    });
};

export default getSourceById;