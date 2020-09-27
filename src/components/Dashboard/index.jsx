import { portfolio } from '@jsextonn/portfolio-api-client'
import {
  AppBar,
  CircularProgress,
  Tab,
  Tabs,
  Typography
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dashboardActions from '../../actions/dashboard'
import { AnalyticsViewer } from './AnalyticsViewer'
import { ContactMessageViewer } from './ContactMessageViewer'
import { FetchMessagesError } from './FetchMessagesError'

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div hidden={value !== index} role="tabpanel" {...other}>
      {children}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

export const Dashboard = () => {
  const jwt = useSelector((state) => state.auth.tokens.idToken)
  const { messages, timePopulated } = useSelector(
    (state) => state.dashboard.messageInfo
  )
  const tabIndex = useSelector((state) => state.dashboard.tabIndex)
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

  const handleChange = (event, newValue) => {
    dispatch(dashboardActions.updateTabIndex(newValue))
  }

  if (loadingError) {
    return <FetchMessagesError />
  }

  return (
    <>
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: '#ffffff'
              }
            }}
            centered
          >
            <Tab disabled={loading} label="Messages" />
            <Tab disabled={loading} label="Analytics" />
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
                <TabPanel value={tabIndex} index={0}>
                  <ContactMessageViewer messages={messages} />
                </TabPanel>

                <TabPanel value={tabIndex} index={1}>
                  <AnalyticsViewer messages={messages} />
                </TabPanel>
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}
