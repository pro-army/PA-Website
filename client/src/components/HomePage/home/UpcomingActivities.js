// component that shows all upcoming events that is contests and webinars

import React from 'react'
import './UpcomingActivities.css'
import EventSlider from './EventSlider'

function UpcomingActivities() {
  return (
    <div id = "upcoming-activities">
      <h2 class = "section-heading">Upcoming Activities</h2>
      {/* slider that contains information of all contests and webinars */}
      <EventSlider />
    </div>
  )
}

export default UpcomingActivities
