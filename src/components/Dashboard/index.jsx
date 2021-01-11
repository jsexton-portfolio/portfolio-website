import { portfolio } from '@jsextonn/portfolio-api-client'
import {
  AppBar,
  CircularProgress,
  Tab,
  Tabs,
  Typography
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import dashboardActions from '../../actions/dashboard'
import { AnalyticsViewer } from './AnalyticsViewer'
import { ContactMessagesViewer } from './ContactMessagesViewer'
import { ContactMessageViewer } from './ContactMessagesViewer/ContactMessageViewer'
import { Dash } from './Dash'
import { FetchMessagesError } from './FetchMessagesError'

export const Dashboard = () => {
  const jwt = useSelector((state) => state.auth.tokens.idToken)
  const history = useHistory()
  const { messages, timePopulated } = useSelector(
    (state) => state.dashboard.messageInfo
  )
  // const tabIndex = useSelector((state) => state.dashboard.tabIndex)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [loadingError, setLoadingError] = useState(false)

  useEffect(() => {
    // Values have already been populated, no need retrieving the messages again
    if (timePopulated) {
      return
    }

    retrieveContactMessages()
    // eslint-disable-next-line
  }, [])

  const retrieveContactMessages = () => {
    setLoading(true)
    const contactClient = portfolio().contact
    contactClient
      .findMessages({ jwt: jwt })
      .then((response) => {
        const messages = response.data.data.contactMessages
        dispatch(dashboardActions.populateContactMessages(messages))
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setLoadingError(true)
      })
  }

  // Maps the single message route to use the same tab as the plural message component.
  const getTabsValue = (pathname) => {
    const pattern = new RegExp('/dashboard/messages/\\w+')
    if (pattern.test(pathname)) {
      return '/dashboard/messages'
    }

    return pathname
  }

  if (loadingError) {
    return <FetchMessagesError />
  }

  return (
    <>
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
          <Tabs
            value={getTabsValue(history.location.pathname)}
            TabIndicatorProps={{
              style: {
                backgroundColor: '#ffffff'
              }
            }}
            centered
          >
            <Tab
              disabled={loading}
              label="Dash"
              component={Link}
              value="/dashboard"
              to="/dashboard"
            />
            <Tab
              disabled={loading}
              label="Messages"
              component={Link}
              value="/dashboard/messages"
              to="/dashboard/messages"
            />
            <Tab
              disabled={loading}
              label="Analytics"
              component={Link}
              value="/dashboard/analytics"
              to="/dashboard/analytics"
            />
          </Tabs>
        </AppBar>

        {loading ? (
          <div style={{ marginTop: 75, textAlign: 'center' }}>
            <CircularProgress size={75} style={{ color: 'black' }} />
            <Typography paragraph style={{ marginTop: 20 }}>
              Retrieving Data...
            </Typography>
          </div>
        ) : (
          <>
            {loadingError ? (
              <FetchMessagesError />
            ) : (
              <>
                <Switch>
                  <Route exact path="/dashboard">
                    <Dash />
                  </Route>
                  <Route exact path="/dashboard/messages">
                    <ContactMessagesViewer messages={messages} />
                  </Route>
                  <Route path="/dashboard/messages/:id">
                    <ContactMessageViewer />
                  </Route>
                  <Route path="/dashboard/analytics">
                    <AnalyticsViewer messages={messages} />
                  </Route>
                </Switch>
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}
