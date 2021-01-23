import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useState } from 'react'
import { Chart } from 'react-charts'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const MessageForYearChart = ({ messages }) => {
  const [organizedMessages, setOrganizedMessages] = useState({})

  useEffect(() => {
    const organized = messages.reduce((acc, message) => {
      const monthCreated = new Date(message.timeCreated).getMonth()
      if (!acc[monthCreated]) {
        acc[monthCreated] = []
      }
      acc[monthCreated].push(message)
      return acc
    }, {})

    setOrganizedMessages(organized)
  }, [messages])

  const data = useMemo(() => {
    const getMessageCountForMonth = (monthIndex) => {
      const messages = organizedMessages[monthIndex]
      return messages ? messages.length : 0
    }

    return [
      {
        label: 'Message Count',
        data: Array.from(new Array(12), (x, i) => ({
          x: i,
          y: getMessageCountForMonth(i)
        }))
      }
    ]
  }, [organizedMessages])

  const series = useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )

  const axes = useMemo(() => {
    const getLargestMessageCountMonth = () => {
      return Math.max(
        ...Object.values(organizedMessages).map((el) => el.length)
      )
    }

    const getMessageCountAxesHardMax = () => {
      const count = getLargestMessageCountMonth()
      return 5 * Math.ceil(count / 5)
    }

    return [
      {
        primary: true,
        type: 'linear',
        position: 'left',
        min: 0,
        max: 12,
        format: (value) => months[value]
      },
      {
        type: 'linear',
        position: 'bottom',
        hardMax: getMessageCountAxesHardMax()
      }
    ]
  }, [organizedMessages])

  return (
    <>
      <Chart data={data} series={series} axes={axes} tooltip />
    </>
  )
}

MessageForYearChart.propTypes = {
  messages: PropTypes.array.isRequired
}
