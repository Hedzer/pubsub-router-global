
import Router from 'pubsub-router';
import cache from 'global-cache';

const name = 'pubsub-router';
cache.has(name) ? cache.get(name) : cache.set(name, new Router());
const instance: Router = cache.get(name);

export default instance;
