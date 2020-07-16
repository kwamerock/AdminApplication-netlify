import { Auth0Client } from '@auth0/auth0-spa-js';
import config from '../../config';

export default new Auth0Client({
  domain: 'dev-n4f5-sqx.us.auth0.com',
  client_id: 'jbIYp7NlAguh0qgGQ1XoqDyERLAdqP6y',
  redirect_uri: config.auth0.callbackUrl
});
 