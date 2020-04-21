export const getTheGuardianNews = async (search:string) => {
    const apiKey = 'a2b3574b-6675-4c22-968a-c8d9bfb47ce0';
    const news = await fetch(`https://content.guardianapis.com/search?q=${encodeURI(search)}&api-key=${apiKey}`);
    console.log(news);
    return news;
};