import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>sidcn</span>,
  project: {
    link: 'https://github.com/sidghimire/sidcn',
  },
  docsRepositoryBase: 'https://github.com/sidghimire/sidcn-docs',
  footer: {
    text: 'sidcn @sidghimire ',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s | sidcn'
    }
  },
}

export default config
