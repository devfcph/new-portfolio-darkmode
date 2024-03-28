import Link from "next/link";


const UserDetail = ({ field, value }) => {
  return (
    <li className="flex items-center">
      <span className="flex-[0_0_6rem]">{field}</span>
      <span className="flex-[0_0_2rem]">:</span>
      <span className="text-black dark:text-white">
        {
          Array.isArray(value)?
          value.map((item, index) => {
          

            return item.hasOwnProperty("uri") ? 
              <Link
                href={item.uri}
                target="_blank"
              >
                <u><li key={index}> {item.label} { item.description != "" ? ":" : ''} {item.description}</li></u>
              </Link>
              : <li key={index}>{item.label}  { item.description != "" ? ":" : ''} {item.description}</li>

            //return <li key={index}>{item.label}  { item.description != "" ? ":" : ''} {item.description}</li>
          }) : value
        }
      </span>
    </li>
  );
};

export default UserDetail;
