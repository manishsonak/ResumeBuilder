// import { Avatar, AvatarImage, AvatarFallback } from "react-avatar";
import styles from './About.module.css';
import PerfectResume from '../../assets/PerfectResume.jpeg';
import {  FaDatabase, FaServer } from 'react-icons/fa'; 
import { SiVite } from "react-icons/si";

const About = () => {
  return (
    <div className={styles.flexColMinH}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid1}>
            <div className={styles.flexColCenter}>
              <div className={styles.spaceY2}>
                <h1 className={styles.heading1}>
                  Crafting the Perfect Resume
                </h1>
                <p className={styles.paragraph1}>
                  Our resume builder helps you create a professional, eye-catching resume that showcases your skills and
                  experience. Get noticed by employers and land your dream job.
                </p>
              </div>
            </div>
            <img
              src={PerfectResume}
              alt="Resume Builder"
              className={styles.image}
            />
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.bgMuted}`}>
        <div className={styles.container}>
          <div className={styles.flexColCenterText}>
            <div className={styles.spaceY2}>
              <h2 className={styles.heading2}>Features That Make a Difference</h2>
              <p className={styles.paragraph2}>
                Our resume builder offers a range of features to help you create a standout resume and land your dream
                job.
              </p>
            </div>
          </div>
          <div className={styles.grid2}>
            <img
              src={PerfectResume}
              alt="Resume Builder Features"
              className={`${styles.image} ${styles.orderLast}`}
            />
            <div className={styles.flexColCenter}>
              <ul className={styles.gridGap6}>
                <li>
                  <div className={styles.gridGap1}>
                    <h3 className={styles.heading3}>Customizable Templates</h3>
                    <p className={styles.paragraph3}>
                      Choose from a variety of professional resume templates to showcase your skills and experience.
                    </p>
                  </div>
                </li>
                <li>
                  <div className={styles.gridGap1}>
                    <h3 className={styles.heading3}>Automated Formatting</h3>
                    <p className={styles.paragraph3}>
                      Our resume builder automatically formats your resume, ensuring a clean and consistent layout.
                    </p>
                  </div>
                </li>
                <li>
                  <div className={styles.gridGap1}>
                    <h3 className={styles.heading3}>Live Previews</h3>
                    <p className={styles.paragraph3}>
                      See your resume take shape in real-time as you build it, making it easy to make adjustments.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.projectSection}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.spaceY2}>
            <h2 className={styles.title}>About the Project</h2>
            <p className={styles.description}>
              This project is a comprehensive web application that showcases the power of modern web development tools
              and techniques. It features a robust backend, a scalable database, and a visually-appealing frontend, all
              seamlessly integrated to provide a delightful user experience.
            </p>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <div className={styles.iconContainer}>
              <div className={styles.iconBackground}>
                <SiVite className={styles.icon} />
              </div>
            </div>
            <h3 className={styles.subtitle}>Frontend</h3>
            <p className={styles.text}>
              The frontend of this application is built using the latest vite framework, ensuring a smooth and
              responsive user experience.
            </p>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.iconContainer}>
              <div className={styles.iconBackground}>
                <FaServer className={styles.icon} />
              </div>
            </div>
            <h3 className={styles.subtitle}>Backend</h3>
            <p className={styles.text}>
              The backend of this application is powered by a robust Node.js/Express.js, ensuring scalability and
              reliability.
            </p>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.iconContainer}>
              <div className={styles.iconBackground}>
                <FaDatabase className={styles.icon} />
              </div>
            </div>
            <h3 className={styles.subtitle}>Database</h3>
            <p className={styles.text}>
              The application utilizes a Mongodb database to store and manage data, ensuring data integrity and high
              performance.
            </p>
          </div>
         
        </div>
      </div>
    </section>
    </div>
  );
}

export default About;

















