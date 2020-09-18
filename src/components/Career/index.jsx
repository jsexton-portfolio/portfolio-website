import { AppBar, Tab, Tabs } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import careerActions from '../../actions/career'
import { Projects } from './Projects'
import { TabPanel } from './TabPanel'
import { Technologies } from './Technologies'

export const Career = () => {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.career.tabIndex)

  const handleChange = (event, newValue) => {
    dispatch(careerActions.updateTabIndex(newValue))
  }

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: '#ffffff'
            }
          }}
          centered
        >
          <Tab label="Technologies" />
          <Tab label="Projects" />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Technologies />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Projects />
      </TabPanel>
    </div>
  )
}
