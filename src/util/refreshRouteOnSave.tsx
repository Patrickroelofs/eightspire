'use client'

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import React, { type ReactElement } from 'react'
import { useRouter } from 'next/navigation'

function RefreshRouteOnSave(): ReactElement {
  const router = useRouter()

  return (
    <PayloadLivePreview
      refresh={() => {
        router.refresh()
      }}
      serverURL={process.env.NEXT_PUBLIC_SERVER_URL ?? ''}
    />
  )
}

export { RefreshRouteOnSave }
