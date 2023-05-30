import React from "react";
import clsx from "clsx";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import WorkExperience from "../components/WorkExperience";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="avatar__photo avatar__photo--xl"
            src="https://github.com/majulahsingapuri.png"
            alt="hero image"
          />
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <strong>Transformations with Technology and Data Insights</strong>{" "}
          <br />
          Full Stack Software Engineer | AI & Machine Learning Specialist
        </p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="contact.vcf"
            target="_blank"
            download={"Bhargav Singapuri"}
          >
            👤 Contact Me!
          </a>
          <a
            className="button button--secondary button--lg margin-horiz--md"
            href="Bhargav Resume.pdf"
            target="_blank"
            download={"Bhargav Resume"}
          >
            📝 Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description="The personal site of Bhargav Singapuri"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <WorkExperience />
      </main>
    </Layout>
  );
}
