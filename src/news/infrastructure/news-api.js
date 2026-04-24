import axios from "axios";

/**
 * Infrastructure adapter for NewsAPI HTTP endpoints.
 *
 * @remarks
 * This class isolates external transport concerns from the application and
 * domain layers.
 */
const newsApi               = import.meta.env.VITE_NEWS_API_URL;
const apiKey                = import.meta.env.VITE_NEWS_API_KEY;
const sourcesEndpoint       = import.meta.env.VITE_SOURCES_ENDPOINT_PATH;
const topHeadlinesEndpoint  = import.meta.env.VITE_TOP_HEADLINES_ENDPOINT_PATH;

const http = axios.create({
    baseURL: newsApi,
    params: {
        apiKey: apiKey,
    },
})

export class NewsApi {

    /**
     * Retrieves available news sources.
     *
     * @returns {Promise<import('axios').AxiosResponse<any>>}
     */
    getSources() {
        return http.get(`${sourcesEndpoint}`);
    }

    /**
     * Retrieves top headlines for a specific source id.
     *
     * @param {string} sourceId
     * @returns {Promise<import('axios').AxiosResponse<any>>}
     */
    getArticlesForSourceId(sourceId) {
        return http.get(`${topHeadlinesEndpoint}`, {params: {sources: sourceId}});
    }

}