import Link from "next/link";

const SingleService = ({ icon, number, title, desc, uri }) => {
  return (
    <div className="relative p-5 transition duration-300 border py-7 md:p-7 card-item group border-platinum dark:border-metalBlack rounded-2xl xl:p-8 2xl:p-10 hover:border-theme">
      <Link
        href={uri}
        target="_blank"
      >
        <div className="absolute transition duration-300 md:top-10 icon right-6 top-7 md:right-8 group-hover:-rotate-45 lg:top-11">
          {icon}
        </div>
      </Link>
      <div className="text-4xl font-extrabold transition duration-300 md:text-4xl number lg:text-xl text-greyBlack opacity-60 group-hover:opacity-100">
        {number}
      </div>
      <h4 className="mt-5 mb-4 text-xl font-medium text-black dark:text-white xl:text-2xl">
        {title}
      </h4>
      <p>{desc}</p>
    </div>
  );
};

export default SingleService;
