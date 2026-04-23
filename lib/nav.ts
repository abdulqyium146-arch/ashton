/**
 * Navigation configuration — single source of truth for Header and Footer.
 *
 * SEO Architecture:
 * - Two topical pillars: Residential Locksmith + Auto Locksmith
 * - Pillar triggers are keyword-rich anchor text linking to pillar pages
 * - Dropdown items distribute internal link equity to every cluster page
 * - Auto cluster uses a 2-column mega dropdown (12 services) with semantic grouping
 * - Geo cluster connects both residential and auto location pages
 * - Blog column in footer ensures editorial pages are never orphaned
 *
 * URL hierarchy is intentionally flat (/service-location) for local SEO.
 * Google associates co-occurrence of city + service better than nested paths
 * when the entity (business NAP) is consistent across all pages.
 */

export interface NavLink {
  label: string
  href: string
  desc?: string        // shown as subtext in dropdown and footer
}

export interface MegaColumn {
  heading: string
  items: NavLink[]
}

// ─── PILLAR 1: Residential Locksmith ─────────────────────────────────────────
// Hub: /locksmith-ashton-in-makerfield
// Cluster: emergency, key cutting, location pages

export const NAV_LOCKSMITH = {
  trigger: 'Locksmith Ashton-in-Makerfield',
  pillar: '/locksmith-ashton-in-makerfield',
  items: [
    {
      label: 'Emergency Locksmith Ashton-in-Makerfield',
      href: '/emergency-locksmith-ashton-in-makerfield',
      desc: '24/7 — 30-minute response, no call-out fee',
    },
    {
      label: 'Key Cutting Ashton',
      href: '/key-cutting-ashton',
      desc: 'All key types cut while you wait',
    },
    {
      label: 'Car Key Replacement Wigan',
      href: '/car-key-replacement-wigan',
      desc: 'All makes — cheaper than the dealer',
    },
    {
      label: 'Locksmith Wigan',
      href: '/locksmith-wigan',
      desc: 'Covering all WN postcodes',
    },
  ],
} as const

// ─── PILLAR 2: Auto Locksmith (mega dropdown) ─────────────────────────────────
// Hub: /auto-locksmith-ashton-in-makerfield
// Columns split by intent: Access/Emergency | Key Programming

export const NAV_AUTO_COLUMNS: MegaColumn[] = [
  {
    heading: 'Access & Emergency',
    items: [
      {
        label: 'Emergency Auto Locksmith',
        href: '/emergency-auto-locksmith-ashton-in-makerfield',
        desc: '24/7, 20–30 min response',
      },
      {
        label: 'Car Lockout Service',
        href: '/car-lockout-ashton-in-makerfield',
        desc: 'Non-destructive entry, no damage',
      },
      {
        label: 'Boot & Trunk Unlocking',
        href: '/trunk-unlock-ashton-in-makerfield',
        desc: 'Keys locked in the boot?',
      },
      {
        label: 'Broken Key Extraction',
        href: '/broken-key-extraction-ashton-in-makerfield',
        desc: 'Door lock or ignition — no barrel damage',
      },
      {
        label: 'Ignition Repair & Replacement',
        href: '/ignition-repair-ashton-in-makerfield',
        desc: 'Diagnose, repair, or replace',
      },
      {
        label: 'Car Rekeying',
        href: '/car-rekeying-ashton-in-makerfield',
        desc: 'Full vehicle security reset',
      },
    ],
  },
  {
    heading: 'Key Programming',
    items: [
      {
        label: 'Car Key Replacement',
        href: '/car-key-replacement-ashton-in-makerfield',
        desc: '40–60% cheaper than the dealer',
      },
      {
        label: 'Lost Car Keys (AKL)',
        href: '/lost-car-key-ashton-in-makerfield',
        desc: 'All-keys-lost programming',
      },
      {
        label: 'Transponder Key Programming',
        href: '/transponder-key-programming-ashton-in-makerfield',
        desc: 'AUTEL & Xhorse equipment',
      },
      {
        label: 'Smart Key Replacement',
        href: '/smart-key-replacement-ashton-in-makerfield',
        desc: 'BMW, Mercedes, Audi & more',
      },
      {
        label: 'Key Fob Programming',
        href: '/key-fob-programming-ashton-in-makerfield',
        desc: 'Re-sync, repair, or replace',
      },
      {
        label: 'Remote Key Repair',
        href: '/remote-key-repair-ashton-in-makerfield',
        desc: 'Diagnose before replacing',
      },
    ],
  },
]

export const NAV_AUTO = {
  trigger: 'Auto Locksmith Ashton',
  pillar: '/auto-locksmith-ashton-in-makerfield',
  columns: NAV_AUTO_COLUMNS,
} as const

// ─── GEO CLUSTER ─────────────────────────────────────────────────────────────
// Links equity from nav to every geo page
// Mix of residential + auto location pages for topical depth

export const NAV_AREAS = {
  trigger: 'Areas We Cover',
  pillar: '/locksmith-near-me',
  items: [
    { label: 'Locksmith Ashton-in-Makerfield', href: '/locksmith-ashton-in-makerfield' },
    { label: 'Locksmith Wigan', href: '/locksmith-wigan' },
    { label: 'Locksmith Near Me', href: '/locksmith-near-me' },
    { label: 'Auto Locksmith Wigan', href: '/auto-locksmith-wigan' },
    { label: 'Auto Locksmith Leigh', href: '/auto-locksmith-leigh' },
    { label: 'Auto Locksmith Newton-le-Willows', href: '/auto-locksmith-newton-le-willows' },
    { label: 'Auto Locksmith St Helens', href: '/auto-locksmith-st-helens' },
  ],
} as const

// ─── FOOTER COLUMN DATA ───────────────────────────────────────────────────────

export const FOOTER_RESIDENTIAL: NavLink[] = [
  { label: 'Emergency Locksmith Ashton', href: '/emergency-locksmith-ashton-in-makerfield', desc: '24/7 — 30 min response' },
  { label: 'Key Cutting Ashton', href: '/key-cutting-ashton' },
  { label: 'Car Key Replacement Wigan', href: '/car-key-replacement-wigan' },
  { label: 'Locksmith Ashton-in-Makerfield', href: '/locksmith-ashton-in-makerfield' },
  { label: 'Locksmith Wigan', href: '/locksmith-wigan' },
  { label: 'Locksmith Near Me', href: '/locksmith-near-me' },
]

export const FOOTER_AUTO: NavLink[] = [
  { label: 'Auto Locksmith Ashton (Hub)', href: '/auto-locksmith-ashton-in-makerfield' },
  { label: 'Car Lockout Service', href: '/car-lockout-ashton-in-makerfield' },
  { label: 'Car Key Replacement', href: '/car-key-replacement-ashton-in-makerfield' },
  { label: 'Lost Car Keys (AKL)', href: '/lost-car-key-ashton-in-makerfield' },
  { label: 'Transponder Key Programming', href: '/transponder-key-programming-ashton-in-makerfield' },
  { label: 'Smart Key Replacement', href: '/smart-key-replacement-ashton-in-makerfield' },
  { label: 'Emergency Auto Locksmith', href: '/emergency-auto-locksmith-ashton-in-makerfield' },
]

export const FOOTER_AREAS: NavLink[] = [
  { label: 'Ashton-in-Makerfield', href: '/locksmith-ashton-in-makerfield' },
  { label: 'Wigan', href: '/locksmith-wigan' },
  { label: 'Auto Locksmith Wigan', href: '/auto-locksmith-wigan' },
  { label: 'Auto Locksmith Leigh', href: '/auto-locksmith-leigh' },
  { label: 'Newton-le-Willows', href: '/auto-locksmith-newton-le-willows' },
  { label: 'St Helens', href: '/auto-locksmith-st-helens' },
  { label: 'Locksmith Near Me', href: '/locksmith-near-me' },
]

export const FOOTER_GUIDES: NavLink[] = [
  { label: 'Auto Locksmith Ashton — What to Expect', href: '/blog/auto-locksmith-ashton-in-makerfield' },
  { label: 'Lost Your Car Keys? What to Do', href: '/blog/lost-car-keys-what-to-do-uk' },
  { label: 'Car Key Replacement Cost UK 2026', href: '/blog/car-key-replacement-cost-uk-2026' },
  { label: 'Transponder Key vs Smart Key', href: '/blog/transponder-key-vs-smart-key-explained' },
  { label: 'Locked Keys in Car — Ashton & Wigan', href: '/blog/locked-keys-in-car-ashton-wigan' },
  { label: 'What to Do If Locked Out', href: '/blog/what-to-do-if-locked-out' },
]
