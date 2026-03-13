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
    company: "Biogen",
    description: [
      <>
        <strong>Process Automation</strong>: Designed and deployed an
        LLM-powered summarization system that extracts key points from pTRS
        meeting minutes and auto-generates leadership-specific 1-page briefs,
        cutting turnaround from 2 weeks to 2 minutes
      </>,
      <>
        <strong>Process Automation</strong>: Designed and deployed an
        LLM-powered summarization system that extracts key points from pTRS
        meeting minutes and auto-generates leadership-specific 1-page briefs,
        cutting turnaround from 2 weeks to 2 minutes
      </>,
      <>
        <strong>Monitoring & Cost Optimization</strong>: Integrated LangSmith
        into internal AI apps to monitor token usage, benchmark responses, and
        optimize prompts — lowering inference costs 34% and raising stakeholder
        satisfaction by 16%
      </>,
      <>
        <strong>Engineering Enablement</strong>: Authored and standardized an
        internal AI-assisted development playbook for Claude Code and OpenAI
        Codex, adopted by 10+ engineers, reducing prototyping time and
        accelerating delivery of features across 3 workflows
      </>,
      <>
        <strong>Knowledge Deduplication</strong>: Implemented ML pipelines to
        detect redundant SOPs via semantic clustering, reducing internal
        documentation load by 10%
      </>,
      <>
        <strong>Backend Modernization</strong>: Re-architected Flask backend API
        using modular blueprints, reducing code coupling and improving
        maintainability; cut average feature integration time by 30% and
        increased unit test coverage from 10% → 80%
      </>,
    ],
    years: "July 2023 - Aug 2024",
  },
  {
    company: "United Overseas Bank",
    description: [
      <>
        <strong>Dashboarding</strong>: Spearheaded a Splunk dashboard
        visualizing TPS, latency, and HTTP statuses on 10M+ daily API records,
        cutting incident diagnosis time from 10 hours to 10 seconds
      </>,
      <>
        <strong>Infrastructure Reliability</strong>: Collaborated with
        cross-functional teams to deliver database upgrades, ensuring minimal
        downtime and security of customer data
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
        <strong>Data Pipeline Engineering</strong>: Developed Airflow ETL
        pipelines ingesting 1M+ relationship and investment records into
        Snowflake, creating a unified data layer that improved accessibility of
        investor intelligence for investment analysis and deal sourcing
      </>,
      <>
        <strong>Investor Relationship Platform</strong>: Built a CRM that
        centralized data on investment and business-development opportunities,
        generating relationship graphs and a searchable knowledge base for
        investment managers to map investor networks and automatically log
        outreach, eliminating manual reconciliation and speeding up deal flow
      </>,
    ],
    years: "Dec 2021 - July 2022",
  },
  {
    company: "UpSkills",
    description: [
      <>
        <strong>Full Stack Application</strong>: Lead a team of Interns to
        create a Document Tracking application in Angular, Flask and MongoDB
        that was deployed using Docker.
      </>,
      <>
        <strong>Licensing Server</strong>: Collaborated with an International
        Developer Team to create an internal Software Licensing and tracking
        system in Flask that was used by the company to ensure that customers
        stayed within contractual obligations.
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
