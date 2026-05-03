// Stripe payment links — filled by Agent-Stripe
// Until real links are created, these redirect to /contact for manual ordering
import type { ProductSlug, CheckoutLinks } from '@/types'

export const CHECKOUT_LINKS: Record<ProductSlug, CheckoutLinks> = {
  kanji: {
    singleUrl: 'https://buy.stripe.com/emf_kanji_single',
    caseUrl: 'https://buy.stripe.com/emf_kanji_case',
  },
  sattu: {
    singleUrl: 'https://buy.stripe.com/emf_sattu_single',
    caseUrl: 'https://buy.stripe.com/emf_sattu_case',
  },
  makhana: {
    singleUrl: 'https://buy.stripe.com/emf_makhana_single',
    caseUrl: 'https://buy.stripe.com/emf_makhana_case',
  },
}

export const FREE_SHIP_THRESHOLD = 60
