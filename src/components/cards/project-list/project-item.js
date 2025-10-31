export const ProjectItem = ({ project, onSelectProject, isSelected=false }) => {
    const handleClick = (project) => {
        onSelectProject(project.Id || 0)
    }

    return (
        <div className="project-item" onClick={() => handleClick(project)} style={isSelected ? { backgroundColor: 'var(--primary-dark-50)' } : {}}>
            <h3>
                {project.Name}
            </h3>
        </div>
    )
};