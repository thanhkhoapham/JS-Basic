/**
    Polyfill

 */
if (!String.prototype.includes) {
    String.prototype.includes = function (Search, start) {
        'use strict';

        if (this.search instanceof RegExp) {
            throw TypeError('first argument must not be a RefExp');
        }
        if (start === undefined) {
            start = 0;
        }
        return this.indexOf(this.search, start) !== -1;
    };

}