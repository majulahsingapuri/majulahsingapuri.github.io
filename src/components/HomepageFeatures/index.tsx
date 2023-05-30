import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Software Engineering",
    Svg: require("@site/static/img/undraw_pull_request.svg").default,
    description: (
      <>
        A Full-Stack Software Engineer with experience in Web, Mobile and
        backend development and deployment.
      </>
    ),
  },
  {
    title: "Data Science",
    Svg: require("@site/static/img/undraw_predictive_analytics.svg").default,
    description: (
      <>
        Trained in the latest Machine Learning tools and technologies as well as
        Data Extraction, Wrangling and Storage.
      </>
    ),
  },
  {
    title: "Cloud Orchestration",
    Svg: require("@site/static/img/undraw_cloud_hosting.svg").default,
    description: (
      <>
        Experienced in provisioning, deploying and maintaining cloud
        infrastructure with Terraform.
      </>
    ),
  },
  {
    title: "Thought Leader",
    Svg: require("@site/static/img/undraw_interview.svg").default,
    description: (
      <>Respected for industry knowledge and sharing innovative ideas.</>
    ),
  },
  {
    title: "Goal Oriented",
    Svg: require("@site/static/img/undraw_done.svg").default,
    description: (
      <>Driven by setting and achieving objectives with a clear focus.</>
    ),
  },
  {
    title: "Team Player",
    Svg: require("@site/static/img/undraw_pair_programming.svg").default,
    description: (
      <>Collaborative and effective in working within diverse teams.</>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin--lg">
          <h1>Top Skills</h1>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
