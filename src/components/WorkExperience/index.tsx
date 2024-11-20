import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type JobItem = {
  company: string;
  description: JSX.Element[];
  years: string;
};

const JobList: JobItem[] = [
  {
    company: "United Overseas Bank",
    description: [
      <>
        <strong>API Transaction Pipeline</strong>: Created a pipeline using{" "}
        <strong>Excel</strong> with <strong>PowerQuery</strong> and Pivot Tables
        to log and analyse over 10M API transactions by API, type, and country,
        enabling key decision holders to make compute resource allocation
        decisions and manage costs.
      </>,
      <>
        <strong>Splunk Dashboard</strong>: Designed and implemented a{" "}
        <strong>Splunk</strong> dashboard to monitor server health, displaying
        critical metrics such as transactions per second and HTTP statuses,
        reducing diagnostic time from over 10 hours to under 10 seconds.
      </>,
      <>
        <strong>API Security</strong>: Upgraded API encryption algorithms with
        Axway's API Gateway and PolicyStudio, resulting in increased customer
        security.
      </>,
    ],
    years: "July 2023 - Aug 2024",
  },
  {
    company: "Vertex Holdings",
    description: [
      <>
        <strong>Full Stack Application</strong>: Developed a{" "}
        <strong>Django-React</strong> application on{" "}
        <strong>Google Cloud Platform</strong> utilising{" "}
        <strong>Terraform</strong> for internal company use, simplifying
        processes for various Funds under the Vertex umbrella.
      </>,
      <>
        <strong>Data Science</strong>: Ingested over 1M data points from
        external databases, APIs and websites using <strong>Python</strong>{" "}
        Scripts, <strong>SQL</strong> and <strong>Airflow</strong> to expand
        data availability to various Funds, allowing for better outreach
        opportunities and improved investment decisions.
      </>,
    ],
    years: "Dec 2021 - July 2022",
  },
  {
    company: "UpSkills",
    description: [
      <>
        <strong>Full Stack Application</strong>: Lead a team of Interns to
        create a Document Tracking application in <strong>Angular</strong>,{" "}
        <strong>Flask</strong> and <strong>MongoDB</strong> that was deployed
        using <strong>Docker</strong>.
      </>,
      <>
        <strong>Licensing Server</strong>: Collaborated with an International
        Developer Team to create an internal Software Licensing and tracking
        system in <strong>Flask</strong> that was used by the company to ensure
        that customers stayed within contractual obligations.
      </>,
    ],
    years: "May 2021 - July 2021",
  },
];

function Job({ company, description, years }: JobItem) {
  return (
    <div className={clsx("row")}>
      <div className="padding-horiz--md">
        <div className="margin-vert--sm">
          <h3>{company}</h3>
          <h5>{years}</h5>
        </div>
        <ul>
          {description.map((data, idx) => (
            <li key={idx} className="margin-vert--sm">
              {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function WorkExperience(): JSX.Element {
  return (
    <section className={styles.experience}>
      <div className="container">
        <div className="text--center margin--lg">
          <h1>Work Experience</h1>
        </div>
        {JobList.map((props, idx) => (
          <Job key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
