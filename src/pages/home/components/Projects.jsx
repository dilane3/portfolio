import { BsArrowRight } from 'react-icons/bs'
import Button from '../../../components/Button'
import ProjectItem from '../../../components/Project'
import styles from '../styles/projects.module.css'

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h1 className={styles.projectsHeading}>Projects</h1>

      <span className={styles.projectsDescription}>
        Since I started working as a web developer I worked on many projects. <br />
        Let’s dive into this now.
      </span>

      <div className={styles.projectsList}>
        <ProjectItem />
      </div>

      <div className={styles.projectsControls}>
        <Button
          color="secondary"
          type="outline"
          style={{ display: 'flex', alignItems: 'center' }}
        >See more <BsArrowRight size={15} style={{ marginLeft: 10 }} /></Button>
      </div>
    </section>
  )
}

export default Projects