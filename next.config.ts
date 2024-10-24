import type { NextConfig } from 'next'

import setupBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = setupBundleAnalyzer({
  enabled: true,
  openAnalyzer: false,
  analyzerMode: 'static',
})

const nextConfig: NextConfig = {
  // The Next.js runtime is Strict Mode-compliant.
  reactStrictMode: true,
}

export default withBundleAnalyzer(nextConfig)
