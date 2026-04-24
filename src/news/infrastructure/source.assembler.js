import {Source} from "../domain/model/source.entity.js";
import {LogoDevApi} from "../../shared/infrastructure/logo-dev-api.js";

/**
 * @typedef {Object} SourceApiResource
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [url]
 * @property {string} [category]
 * @property {string} [language]
 * @property {string} [country]
 */


const logoApi = new LogoDevApi();

/**
 * Maps source resources from the provider format into domain entities.
 */
export class SourceAssembler {
    /**
     * @param {import('axios').AxiosResponse<{status: string, sources: SourceApiResource[]}>} response
     * @returns {Source[]}
     */
    static toEntitiesFromResponse(response) {
        if (response.data.status !== "ok") {
            console.error(`${response.status},  ${response.code}, ${response.message}`);
            return [];
        }
        const sourcesResponse = response.data;
        return sourcesResponse.sources.map((source) => {
            return this.toEntityFromResource(source);
        });
    }

    /**
     * @param {SourceApiResource} resource
     * @returns {Source}
     */
    static toEntityFromResource(resource) {
        let source = new Source({...resource});
        source.urlToLogo = source.url !== '' ? logoApi.getUrlToLogo(source.url) : '';
        return source;
    }
}