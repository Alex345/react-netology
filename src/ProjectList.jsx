import { Children } from 'react';

function ProjectList({projects}) {

  console.log(projects);
  let str = '';
  projects.forEach((elem, index) => {
    str += '<img src="' + elem.img + '" alt="' + elem.category + '"/>';
  });

  function createMarcup() {
    return {__html: str};
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: str}}></div>
    </>
  );
}

export default ProjectList;
