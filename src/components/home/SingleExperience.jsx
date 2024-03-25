const SingleExperience = ({ platform, duration, schema, position, description }) => {

  // let descriptions = description.map( item => {
  //   return <li><p>{item}</p></li>
  // });

  let items = [];

  if( Array.isArray(description) ) {
    description.map((item, index) => {
      items.push(<li key={index}>{item}</li>);
    })
  }

  console.log(items);

  return (
    <li className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
      <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
        <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
          {platform}
        </h6>
        <p className="text-[13px] md:text-sm text-theme">{duration}</p>
        <hr />
        <p className="text-[13px] md:text-sm text-theme">{schema}</p>
      </div>
      <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
        <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
          {position}
        </h4>
        <ul>
          {
             Array.isArray(description) ? 
              description.map((item, index) => {
                return <li key={index}>{"◽ "}{item}</li> 
              }) : description
            
          }
        </ul>
      </div>
    </li>
  );
};

export default SingleExperience;
