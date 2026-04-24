import {Source} from "./source.entity.js";

/**
 * @typedef {Object} ArticleProps
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [url]
 * @property {string} [urlToImage]
 * @property {import('./source.entity.js').SourceProps | Source | null} [source]
 * @property {string|Date} [publishedAt]
 */

/**
 * Domain entity representing a news article.
 */
export class Article {
    /**
     * @param {ArticleProps} [props]
     */
    constructor({title = '', description = '', url = '', urlToImage = '', source = null, publishedAt = ''}) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.source = source ? new Source(source) : null;
        this.publishedAt = new Date(publishedAt);
    }

    /**
     * Formats publication date for display purposes.
     *
     * @returns {string}
     */
    getFormatedPublishedAt() {
        return this.publishedAt.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}