// Normalize user-entered phone input to E.164 (e.g. "+15125550142"),
// which is what Klaviyo requires. Defaults to the US country code (+1)
// for 10-digit numbers. Returns null if the input can't be a valid number.
export function toE164(input) {
  if (!input) return null;

  const trimmed = String(input).trim();
  const hasPlus = trimmed.startsWith('+');
  const digits = trimmed.replace(/\D/g, '');

  // Already international (caller typed a leading +).
  if (hasPlus) {
    return digits.length >= 8 && digits.length <= 15 ? `+${digits}` : null;
  }

  // US 10-digit number -> add +1.
  if (digits.length === 10) return `+1${digits}`;

  // US number already including the country code.
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;

  return null;
}
