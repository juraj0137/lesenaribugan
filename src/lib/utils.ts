export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ')
}

export function formatPhoneForHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`
}

export function formatEmailForHref(email: string): string {
  return `mailto:${email}`
}
