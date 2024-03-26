const UserDetail = ({ field, value }) => {
  return (
    <li className="flex items-center">
      <span className="flex-[0_0_6rem]">{field}</span>
      <span className="flex-[0_0_2rem]">:</span>
      <span className="text-black dark:text-white">
        {
          Array.isArray(value)?
          value.map((item, index) => {
            return <li key={index}>{item.language} : {item.profiency}</li>
          }) : value
        }
      </span>
    </li>
  );
};

export default UserDetail;
