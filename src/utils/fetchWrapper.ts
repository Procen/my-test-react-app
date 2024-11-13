/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-console */


export const fetchWrapper = { get };

function buildHeaders(): Headers {
  const headers = new Headers({
    "Content-Language": "en",
    "Accept-Language": "en",
    "Content-Type": "application/json"
  });

  return headers;
}


async function get<T = undefined>(url: string): Promise<T> {

  try {
    const requestOptions = {
      method: "GET",
      headers: buildHeaders(),
    };
    const result = await fetch(`${url}`, requestOptions);
    return await handleResponse(result);
  } catch (e) {
    console.error("Error sending GET to server");
    console.error(e);
    throw e;
  }
}

async function handleResponse(response: Response) {
  let json;
  try {
    const body = await response.text();
    if (body && body.length) {
      json = JSON.parse(body);
    }
  } catch (e) {
    console.error("Error parsing backend response");
    console.error(e);
    throw e;
  }

  return json;
}
