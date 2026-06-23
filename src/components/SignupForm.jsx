import { useState } from 'react';
import { subscribeSms } from '../lib/klaviyo.js';
import { toE164 } from '../lib/phone.js';

// SMS signup wired to Klaviyo's client-side subscription API.
// Visual behavior matches the original prototype: the button flips to
// "Got it ✓" on success. Errors surface a short message below the input.
export default function SignupForm() {
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  const busy = status === 'submitting';
  const done = status === 'success';

  const buttonLabel = busy ? 'Sending…' : done ? 'Got it ✓' : 'Text me';

  async function handleSubmit(event) {
    event.preventDefault();
    if (busy || done) return;

    const e164 = toE164(phone);
    if (!e164) {
      setStatus('error');
      setError('Enter a valid phone number, e.g. (512) 555-0142.');
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      const result = await subscribeSms(e164);
      if (result.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setError(result.detail || 'Something went wrong — please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error — please try again.');
    }
  }

  function handleChange(event) {
    setPhone(event.target.value);
    if (status === 'error') {
      setStatus('idle');
      setError('');
    }
  }

  return (
    <form className="sms-form" onSubmit={handleSubmit} noValidate>
      <div className="sms-input-row">
        <input
          type="tel"
          inputMode="tel"
          name="phone"
          autoComplete="tel"
          placeholder="(512) 555 — 0142"
          aria-label="Phone number"
          value={phone}
          onChange={handleChange}
          disabled={busy || done}
        />
        <button type="submit" disabled={busy || done}>
          {buttonLabel}
        </button>
      </div>

      {status === 'error' && error ? (
        <p className="signup-msg signup-msg--error" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
