// Klaviyo client-side SMS subscription.
//
// Uses Klaviyo's public "client/subscriptions" endpoint, which is designed
// to be called directly from the browser with only the PUBLIC API key
// (a.k.a. Site ID / company_id). No private key is ever exposed.
//
// Docs: https://developers.klaviyo.com/en/reference/create_client_subscription

const PUBLIC_KEY = import.meta.env.VITE_KLAVIYO_PUBLIC_KEY;
const SMS_LIST_ID = import.meta.env.VITE_KLAVIYO_SMS_LIST_ID;
const REVISION = import.meta.env.VITE_KLAVIYO_REVISION || '2025-10-15';

const ENDPOINT = 'https://a.klaviyo.com/client/subscriptions';

export function isKlaviyoConfigured() {
  return Boolean(PUBLIC_KEY && SMS_LIST_ID);
}

/**
 * Subscribe a phone number to SMS marketing for the configured list.
 * @param {string} phoneE164 - phone number in E.164 format (e.g. +15125550142)
 * @returns {Promise<{ok: boolean, demo?: boolean, status?: number, detail?: string}>}
 */
export async function subscribeSms(phoneE164) {
  // No keys configured yet — behave like the prototype (optimistic success)
  // so the page is usable in preview/dev, but make it loud in the console.
  if (!isKlaviyoConfigured()) {
    console.warn(
      '[Klaviyo] VITE_KLAVIYO_PUBLIC_KEY and/or VITE_KLAVIYO_SMS_LIST_ID are not set. ' +
        'The signup form is running in demo mode and is NOT sending data to Klaviyo. ' +
        'Add them to a .env file (see .env.example) to go live.',
    );
    return { ok: true, demo: true };
  }

  const url = `${ENDPOINT}?company_id=${encodeURIComponent(PUBLIC_KEY)}`;

  const body = {
    data: {
      type: 'subscription',
      attributes: {
        custom_source: "Monty's Landing Page",
        profile: {
          data: {
            type: 'profile',
            attributes: {
              phone_number: phoneE164,
              subscriptions: {
                sms: {
                  marketing: { consent: 'SUBSCRIBED' },
                },
              },
            },
          },
        },
      },
      relationships: {
        list: {
          data: { type: 'list', id: SMS_LIST_ID },
        },
      },
    },
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
      revision: REVISION,
    },
    body: JSON.stringify(body),
  });

  // 202 Accepted is the documented success status for this endpoint.
  if (response.status === 202) {
    return { ok: true };
  }

  let detail = '';
  try {
    const payload = await response.json();
    detail = payload?.errors?.[0]?.detail || '';
  } catch {
    // response had no JSON body
  }

  return { ok: false, status: response.status, detail };
}
