
import Router from 'pubsub-router';
import global from 'whenthough';

const name = Symbol.for('@whenthough/pubsub-router');
const instance: Router = global.set(name, new Router());

export default instance;
