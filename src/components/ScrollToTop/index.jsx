import { useEffect } from 'react'
import { useLocation, withRouter } from 'react-router-dom'

/**
 * Component used to reset scroll to top of screen after navigating to a different component.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default withRouter(ScrollToTop)
