/**
 * VTEX FastStore Configuration — The Joy Lab (lojajoy)
 * Figma Source: https://www.figma.com/design/32mjETxf0SdgkCprK0UL0L/Revis%C3%A3o-TJL?node-id=0-1
 *
 * Note: This file prepares the 1:1 configuration for `@faststore/core` when migrating
 * onto the live VTEX account (`lojajoy`). Currently running in standalone simulation mode
 * (`index.html`, `pdp.html`, `category.html`) for instant localhost and GitHub Pages execution.
 */
module.exports = {
  seo: {
    title: "The Joy Lab — Skincare Clínico de Alta Performance",
    description: "Fórmulas minimalistas com ativos biodisponíveis em concentrações clínicas eficazes e alta tolerabilidade dermatológica.",
    titleTemplate: "%s | The Joy Lab",
    author: "The Joy Lab"
  },

  // Theming & Brandless Design Tokens (mapped in styles.css)
  theme: "tjl-quiet-luxury",

  // Ecommerce Platform
  platform: "vtex",

  // Platform specific configs for VTEX
  api: {
    storeId: "lojajoy",
    workspace: "master",
    environment: "vtexcommercestable",
    hideUnavailableItems: false,
    incrementAddress: false
  },

  // Default Channel
  session: {
    currency: {
      code: "BRL",
      symbol: "R$"
    },
    locale: "pt-BR",
    channel: '{"salesChannel":"1","regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null
  },

  cart: {
    id: "",
    items: [],
    messages: [],
    shouldSplitItem: true
  },

  // Production URLs
  storeUrl: "https://www.thejoylab.com.br",
  secureSubdomain: "https://secure.thejoylab.com.br",
  checkoutUrl: "https://secure.thejoylab.com.br/checkout",
  loginUrl: "https://secure.thejoylab.com.br/api/io/login",
  accountUrl: "https://secure.thejoylab.com.br/api/io/account",

  previewRedirects: {
    home: "/",
    plp: "/tratamento",
    search: "/s?q=Power%20Clarity",
    pdp: "/lumiscent-body-mist-lavander/p"
  },

  // Lighthouse CI Budgets
  lighthouse: {
    server: process.env.BASE_SITE_URL || "http://localhost:8090",
    pages: {
      home: "/index.html",
      pdp: "/pdp.html?id=lumiscent_lavander",
      collection: "/category.html?type=rotinas"
    }
  },

  // Analytics (GA4 Enhanced Ecommerce + Partytown Web Worker Isolation)
  analytics: {
    gtmContainerId: "GTM-PKDPGVKSWJ"
  },

  experimental: {
    nodeVersion: 20,
    cypressVersion: 13
  }
};
