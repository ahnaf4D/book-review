import { Link } from 'react-router-dom';

const Blog = ({ item }) => {
  const { coverImage, title, id, author, datePublished, description } = item;
  return (
    <div className='card card-compact font-workSans  bg-base-100 shadow-xl'>
      <figure>
        <img src={coverImage} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions justify-center'>
          <Link to={`/blog/${id}`}>
            <button className='btn btn-success text-xl'>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
