


import React from 'react';
import { Timeline, Card } from 'antd';
import "./features.css"

const events = [
  { title: 'Event 1', description: 'Description of event 1', time: '2024-07-01' },
  { title: 'Event 2', description: 'Description of event 2', time: '2024-07-02' },
  { title: 'Event 3', description: 'Description of event 3', time: '2024-07-03' },
  { title: 'Event 4', description: 'Description of event 4', time: '2024-07-04' },
];

const Features = () => {
  return (
    <Timeline>
      <div style={{fontSize: '20px', fontWeight: 'bold', color: '#09263b'}}>Time Line and Events</div>
      {events.map((event, index) => (
        <Timeline.Item key={index} color="green">
          <div className="timeline-item">
            <Card title={event.title} bordered={false}>
              <p>{event.description}</p>
              <p>{event.time}</p>
            </Card>
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default Features;
