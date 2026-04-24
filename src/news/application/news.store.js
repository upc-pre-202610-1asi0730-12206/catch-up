import {computed, reactive} from "vue";
import {Source} from "../domain/model/source.entity.js";
import {NewsApi} from "../infrastructure/news-api.js";
import {SourceAssembler} from "../infrastructure/source.assembler.js";
import {ArticleAssembler} from "../infrastructure/article.assembler.js";

/**
 * @typedef {Object} NewsStore
 * @property {import('../domain/model/source.entity.js').Source[]} sources
 * @property {import('../domain/model/article.entity.js').Article[]} articles
 * @property {Array<unknown>} errors
 * @property {import('../domain/model/source.entity.js').Source | null} currentSource
 * @property {(source: import('../domain/model/source.entity.js').Source) => void} setCurrentSource
 * @property {() => void} loadSources
 * @property {() => void} loadArticlesForCurrentSource
 */

const newsApi = new NewsApi();

/**
 * Application-layer state container that orchestrates source and article loading.
 *
 * @remarks
 * In DDD terms, this module coordinates use-case behavior and delegates data
 * acquisition/mapping to infrastructure services.
 */
export const newsStore = reactive({
        sources: [],
        articles: [],
        errors: [],
        currentSource: null,
        /**
         * Sets the active source and triggers article retrieval.
         *
         * @param {Source} source
         * @returns {void}
         */
        setCurrentSource(source) {
            if (source instanceof Source) {
                this.currentSource = source;
                this.loadArticlesForCurrentSource();
            }
        },
        /**
         * Loads source list from the provider and selects the first source.
         *
         * @returns {void}
         */
        loadSources() {
            this.errors = [];
            newsApi.getSources().then(response => {
                this.sources = SourceAssembler.toEntitiesFromResponse(response);
                if (this.sources.length > 0) {
                    this.setCurrentSource(this.sources[0]);
                    this.loadArticlesForCurrentSource();
                }
            }).catch(error => {
                this.errors.push(error);
                this.sources = [];
            });
        },
        /**
         * Loads articles for the current source.
         *
         * @returns {void}
         */
        loadArticlesForCurrentSource() {
            if (this.currentSource === null) return;
            newsApi.getArticlesForSourceId(this.currentSource.id).then(response => {
                this.articles = ArticleAssembler.withSource(this.currentSource).toEntitiesFromResponse(response);
            }).catch(error => {
                this.errors.push(error);
                this.articles = [];
            });
        }
    });