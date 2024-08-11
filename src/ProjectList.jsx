function ProjectList({projects}) {

  // Разделяем картинки на колонки
  let str = '';
  let str1 = '<div class="first-col">';
  let str2 = '<div class="second-col">';
  let str3 = '<div class="third-col">';
  let counter = 0;
  projects.forEach((elem, index) => {
    if(0 === counter) {
      str1 += '<img src="' + elem.img + '" alt="' + elem.category + '"/>'
    } else if( 1 === counter) {
      str2 += '<img src="' + elem.img + '" alt="' + elem.category + '"/>';
    } else {
      str3 += '<img src="' + elem.img + '" alt="' + elem.category + '"/>';
    }

    counter++;

    if(3 === counter) {
      counter = 0;
    }

    if(index === projects.length - 1) {
      str1 += '</div>';
      str2 += '</div>';
      str3 += '</div>';
      str = str1 + str2 + str3;
    }
  });

  // Выводим картинки
  return (
    <>
      <div className="portfolio__gallery" dangerouslySetInnerHTML={{__html: str}}></div>
    </>
  );
}

export default ProjectList;
