import React from 'react';
import './project.css';

function Projects(props){
  function handleClick(e){
    console.log(e);
  }

  const nodeProjects = props.dataProject.map((obj, key) =>
    <div key={key} onClick={handleClick} className='card' data-cat={obj.cat}>
      <h2 className='card-big-title'>{ obj.title }</h2>
      {/*<div className='card-picture' style={{backgroundImage:"url('https://firebasestorage.googleapis.com/v0/b/portfolio-afdea.appspot.com/o/project%2Flproject.jpg?alt=media&token=5b298f16-05eb-44bc-93a7-86523f25959d')"}}></div>*/}
      <picture>
        <img src='http://via.placeholder.com/400x300/F3C880/fff'/>
      </picture>
      <div className='card-description'>
        <p className='card-title'>{ obj.title }</p>
        <div>
          { obj.tech.map((tech,key) =>
            <i key={key} className={'devicon-'+tech}></i> )
          }
        </div>
      </div>
      <p className='card-content'>
        The Realtime Database is a NoSQL database and as such has different optimizations and functionality compared to a relational database. The Realtime Database API is designed to only allow operations that can be executed quickly. This enables you to build a great realtime experience that can serve millions of users without compromising on responsiveness.
      </p>
    </div>
  );
  return(
    <div className='gallery-projects'>
      { nodeProjects }
    </div>
  )
}

export default Projects;
