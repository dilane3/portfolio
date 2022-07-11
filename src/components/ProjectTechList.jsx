import styles from './styles/projectTechList.module.css'

const TechItem = ({ index, data }) => {
  return (
    <div className={styles.techItem} style={{ marginLeft: 25 * index }} title={data.name}>
      <img
        className={styles.techItemImage}
        src={require(`../assets/images/skills/${data.image}`)}
      />
    </div>
  )
}

const ProjectTechList = ({ data }) => {
  return (
    <div className={styles.techList}>
      {
        data.map((tech, index) => {
          return (
            <TechItem key={index} index={index} data={tech} />
          )
        })
      }
    </div>
  )
}

export default ProjectTechList