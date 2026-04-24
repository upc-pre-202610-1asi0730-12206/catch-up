/**
 * @typedef {Object} SourceProps
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [url]
 * @property {string} [category]
 * @property {string} [language]
 * @property {string} [country]
 */

/**
 * Domain entity representing a news provider.
 *
 * @remarks
 * This model belongs to the domain layer and should stay independent from
 * transport details such as API response wrappers.
 */
export class Source {
    /**
     * @param {SourceProps} [props]
     */
    constructor({id = "", name = "", description = "", url = "", category = "", language = "", country = ""}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.category = category;
        this.language = language;
        this.country = country;
        this.urlToLogo = "";
    }
}