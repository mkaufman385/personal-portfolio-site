import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007 - 2011"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Valley Regional High School, Deep River, CT
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Old Dominion University, Norfolk, VA
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelors Degree
          </h4>
          <p>Exercise Science</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2017"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Exercise Physiologist - Joint Effort Exercise
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Branford, CT</h4>
          <p>
            Co-managed facility programs for individuals over 50 years old,
            assisting in the initial opening of the facility, conducting sales,
            tours, and programming.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Assistant Program Manager - Yale New Haven Hospital (EXOS)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">New Haven, CT</h4>
          <p>
            Orchestrated strategic planning for Yale New Haven Hospital and Yale
            University Medical School, managing Onsite Corporate Wellness for
            over 1000 members.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bloomtech Institute of Technology
          </h3>
          <p>Full Stack Web Development Program Graduate</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
