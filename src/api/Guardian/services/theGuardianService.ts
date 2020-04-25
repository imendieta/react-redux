import { constants } from "../../../constants"

export const getTheGuardianNews = async (search:string) => {
    const news = await
        fetch(`https://content.guardianapis.com/search?q=${encodeURI(search)}&api-key=${constants.GUARDIAN_API_KEY}`);
    console.log(news);
    return news.json();
};