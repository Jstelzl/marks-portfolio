import { NavLink, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { portfolioItems } from '../data/siteData'
import NotFound from './NotFound'

function ProjectDetail() {
  const { slug } = useParams()
  const project = portfolioItems.find((p) => p.slug === slug)

  if (!project) {
    return <NotFound />
  }

  return (
    <>
      <PageHeader
        title={project.title}
        subtitle={project.subtitle}
      />
      <section className="project-detail">
        <div className="row">
          <div className="col-xs-12">
            <p className="project-detail__description">{project.description}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <h3>Project Walkthrough</h3>
            <p>
              Share walkthroughs of finished jobs, before-and-after clips, or
              client case studies.
            </p>
            <div className="card">
              <video
                className="img-fluid"
                controls
                poster={project.image}
                aria-label={`Project walkthrough for ${project.title}`}
              >
                {project.video ? (
                  <source src={project.video} type="video/mp4" />
                ) : null}
                <p>Add video files under /public/assets to enable playback.</p>
              </video>
            </div>
          </div>
        </div>

        {project.photos && project.photos.length > 0 && (
          <div className="row">
            <div className="col-xs-12">
              <h3>Project Photos</h3>
              <div className="project-detail__photos">
                {project.photos.map((photo, index) => (
                  <div
                    className="project-detail__photo-item"
                    key={index}
                  >
                    <img
                      className="project-detail__photo-img img-fluid"
                      src={photo.src}
                      alt={photo.description || `Photo ${index + 1}`}
                    />
                    {photo.description && (
                      <p className="project-detail__photo-caption">
                        {photo.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col-xs-12">
            <NavLink className="btn btn-primary" to="/portfolio">
              Back to Portfolio
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectDetail
