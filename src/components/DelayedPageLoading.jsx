import { useEffect, useState } from 'react'
import PageLoading from './PageLoading'

const DELAY_MS = 2000

function DelayedPageLoading() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null
  return <PageLoading fullPage />
}

export default DelayedPageLoading
