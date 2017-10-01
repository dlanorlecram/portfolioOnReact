import React from 'react';
import './project.css';
import { GalleryProjects, Card, CardContent, CardBigTitle, Description, CardTitle } from '../project.css.js'

function Projects(props){
  function handleClick(e){
    console.log(e.target);
  }

  const nodeProjects = props.dataProject.map((obj, key) =>
    <Card key={key} onClick={handleClick} className='card' data-cat={obj.cat}>
      <CardBigTitle className='card-big-title'>{ obj.title }</CardBigTitle>
      <picture>
        <img alt='name of project' src='http://via.placeholder.com/400x300/F3C880/fff'/>
      </picture>
      <Description>
        <CardTitle>{ obj.title }</CardTitle>
        <div>
          { obj.tech.map((tech,key) =>
            <i key={key} className={'devicon-'+tech}></i> )
          }
        </div>
      </Description>
      <CardContent className='card-content'>
        The Realtime Database is a NoSQL database and as such has different optimizations and functionality compared to a relational database. The Realtime Database API is designed to only allow operations that can be executed quickly. This enables you to build a great realtime experience that can serve millions of users without compromising on responsiveness.
      </CardContent>
    </Card>
  );
  return(
    <GalleryProjects className='gallery-projects'>
      { nodeProjects }
    </GalleryProjects>
  )
}

export default Projects;
