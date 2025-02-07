import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: `%s - ${process.env.NAME_DEVELOP}`,
    default:
      `${process.env.NAME_DEVELOP} - Software architect, founder, and explorer of nature`,
  },
  description:
    'I’m Jhony, a software architect and entrepreneur based in Garagoa, Boyacá, Colombia. I’m the co-founder and COO of Tropical Media, where we help businesses grow their brands and develop technological solutions that enable individuals and companies to bring their projects to life and strengthen their businesses.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
