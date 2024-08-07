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
        Upgraded encryption from a vulnerable algorithm to a secure version
        using <strong>Axway's API Gateway and PolicyStudio</strong>, resulting
        in increased customer security.
      </>,
      <>
        Managed extensive documentation and client communication to ensure
        smooth transition and compliance.
      </>,

      <>
        Designed and implemented a <strong>Splunk</strong>-based dashboard to
        monitor server health, displaying critical metrics such as transactions
        per second and HTTP statuses.
      </>,

      <>
        Collaborated with the Splunk Dashboard software team to ensure accurate
        log generation, ingestion, and display, significantly reducing
        diagnostic time from hours to seconds.
      </>,

      <>
        Created a pipeline using <strong>Excel</strong> with{" "}
        <strong>PowerQuery</strong> and <strong>Pivot Tables</strong> to log and
        analyze API transaction volume by API, type, and country.
      </>,

      <>
        Enabled business teams to forecast API usage accurately, aiding in
        resource allocation and transforming the cost center into a
      </>,
    ],
    years: "July 2023 - Aug 2024",
  },
  {
    company: "Vertex Holdings",
    description: [
      <>
        Built and deployed a Full Stack <strong>Django-React</strong> app on{" "}
        <strong>GCP</strong> using <strong>Terraform</strong> for internal
        company use that simplified processes for the various Funds under the
        Vertex umbrella.
      </>,
      <>
        Ingested data from external databases, APIs and websites using{" "}
        <strong>Python</strong> Scripts and <strong>Airflow</strong> to expand
        the data available to the various Funds that allowed for better outreach
        opportunities and improved investment decisions.
      </>,
    ],
    years: "Dec 2021 - July 2022",
  },
  {
    company: "UpSkills",
    description: [
      <>
        Lead a team of Interns to create a Full Stack application in{" "}
        <strong>Angular</strong>, <strong>Flask</strong> and{" "}
        <strong>MongoDB</strong> that was deployed using <strong>Docker</strong>{" "}
        for demonstrations to large local banks.
      </>,
      <>
        Collaborated with an International Developer Team to create an internal
        Software Licensing and tracking system that was used by the company to
        ensure that customers stayed within contractual obligations.
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
