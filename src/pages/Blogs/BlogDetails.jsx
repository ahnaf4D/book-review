import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
  const singleBlogData = useLoaderData();
  const { coverImage, title, id, author, datePublished, content, tags } =
    singleBlogData;
  return (
    <div className='hero mx-auto container my-14 bg-base-200 font-workSans'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img src={coverImage} className='max-w-sm rounded-lg shadow-2xl' />
        <div>
          <h1 className='text-5xl font-bold'>{title}</h1>
          <p className='py-6'>{content}</p>
          <span className='font-bold'>Tags :</span>
          {tags.map((item, index) => (
            <span
              key={index}
              className='bg-gray-200 mx-4 p-2 rounded text-[#23BE0A] font-medium font-workSans'
            >
              #{item}
            </span>
          ))}
          <p className='py-4'>
            <span className='font-bold mr-2'>Published Date : </span>
            {datePublished}{' '}
          </p>
          <p>
            {' '}
            <span className='font-bold'>Author</span> : {author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
