/**
 * @file next.ts types
 * @description Some next.js routing types
 * @see https://nextjs.org/docs/app/building-your-application/routing
 */

import type React from 'react'

type FC = Pick<React.FC, 'displayName'>

// Next.js layout types.
/**
 * Next.js layout type
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/layout#reference
 */
export type NextLayout<T extends object = object> = Readonly<React.PropsWithChildren<T>>

/**
 * Next.js layout interface
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/layout#reference
 */
export interface NextLayoutFC<T extends object = object> extends FC {
  (props: NextLayout<T>): React.ReactElement
}

// Next.js page types.
/**
 * Next.js page type.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/page#reference
 */
export type NextPage<P extends object = object, S extends object = object> = Readonly<{
  params: Promise<P>
  searchParams: Promise<S>
}>

/**
 * Next.js page interface.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/page#reference
 */
export interface NextPageFC<P extends object = object, S extends object = object> extends FC {
  (props: NextPage<P, S>): React.ReactElement
}

// Next.js error pages.
/**
 * Next.js error page type.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/error#reference
 */
export type NextErrorPage = Readonly<{
  error: Error & { digest?: string }
  retry: () => void
}>

/**
 * Next.js error page interface.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/error#reference
 */
export interface NextErrorPageFC extends FC {
  (props: NextErrorPage): React.ReactElement
}

// Next.js loading pages.
/**
 * Next.js loading pages.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/loading
 */
export interface NextLoadingFC extends FC {
  (): React.ReactElement
}

// Next.js not-found pages.
/**
 * Next.js not-found pages.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/not-found#reference
 */
export interface NextNotFoundFC extends FC {
  (): React.ReactElement
}
