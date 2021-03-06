import { getGraphQLParameters } from 'graphql-helix/dist/get-graphql-parameters';
import { processRequest } from 'graphql-helix/dist/process-request';
import { renderGraphiQL } from 'graphql-helix/dist/render-graphiql';
import { shouldRenderGraphiQL } from 'graphql-helix/dist/should-render-graphiql';

import { defaultQuery, schema } from './_graphql/schema';

const respond = async (request) => {
  console.warn({ endpointRequest: request });

  if (shouldRenderGraphiQL(request))
    return {
      body: renderGraphiQL({
        defaultQuery,
      }),
      headers: { 'Content-Type': 'text/html' },
      status: 200,
    };

  if (typeof request.body === 'string') request.body = JSON.parse(request.body);

  const parameters = getGraphQLParameters(request);
  const result = await processRequest({
    ...parameters,
    contextFactory: () => ({ authorization: request.headers.authorization }),
    request,
    schema,
  });

  if (result.type === 'RESPONSE')
    return {
      body: result.payload,
      headers: result.headers,
      status: result.status,
    };

  return {
    body: "svelte-add-graphql doesn't support multipart responses or event streams",
    headers: {},
    status: 501,
  };
};

export const del = ({ body, query }, { headers }) => respond({ body, headers, method: 'DELETE', query });
export const get = ({ body, query }, { headers }) => respond({ body, headers, method: 'GET', query });
export const head = ({ body, query }, { headers }) => respond({ body, headers, method: 'HEAD', query });
export const post = ({ body, query }, { headers }) => respond({ body, headers, method: 'POST', query });
export const put = ({ body, query }, { headers }) => respond({ body, headers, method: 'PUT', query });
