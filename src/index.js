import loaderUtils from 'loader-utils';
import {transformSource} from './helper';

const IS_RAW = true;

export {
    fetchResourceLoader as default,
    IS_RAW as raw
};

function fetchResourceLoader() {
    this.cacheable();

    const callback = this.async();
    const {path} = loaderUtils.parseQuery(this.resourceQuery);

    transformSource(path, callback);
}
