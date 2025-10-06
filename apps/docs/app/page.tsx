import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          Bugster Documentation
        </h1>

        <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', lineHeight: '1.6' }}>
          Welcome to Bugster - your automated testing and analysis companion.
        </p>

        <div style={{ maxWidth: '800px', textAlign: 'left' }}>
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              What is Bugster?
            </h2>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              Bugster is an intelligent testing tool that helps you maintain code quality
              through automated analysis and test generation.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Getting Started
            </h2>
            <ol style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li>Configure Bugster in your project directory</li>
              <li>Run automated analysis on your codebase</li>
              <li>Review generated test cases and insights</li>
              <li>Integrate findings into your development workflow</li>
            </ol>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Features
            </h2>
            <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li>Automated test generation</li>
              <li>Code quality analysis</li>
              <li>Integration with Next.js and React applications</li>
              <li>Project-specific configuration via <code>.bugster/</code></li>
            </ul>
          </section>
        </div>

        <Button appName="docs" className={styles.secondary}>
          Learn More
        </Button>
      </main>
      <footer className={styles.footer}>
        <p style={{ color: '#666' }}>
          Bugster Documentation • Built with Turborepo
        </p>
      </footer>
    </div>
  );
}
