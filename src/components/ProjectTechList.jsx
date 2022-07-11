import styles from './styles/projectTechList.module.css'

const TechItem = ({ index }) => {
  return (
    <div className={styles.techItem} style={{ marginLeft: 25 * index }}>
      R
    </div>
  )
}

const ProjectTechList = () => {
  return (
    <div className={styles.techList}>
      <TechItem index={0} />
      <TechItem index={1} />
      <TechItem index={2} />
      <TechItem index={3} />
      <TechItem index={4} />
    </div>
  )
}

export default ProjectTechList