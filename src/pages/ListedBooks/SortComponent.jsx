const SortComponent = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className='flex justify-center my-6'>
      <select
        className='text-2xl text-center select-success w-1/3 bg-[#23BE0A] text-white font-semibold py-2 px-3 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-[#1AA007] focus:outline-none focus:ring-2 focus:ring-green-500'
        onChange={handleSortChange}
      >
        <option value=''>Sort</option>
        <option value='ascending'>Ascending</option>
        <option value='descending'>Descending</option>
      </select>
    </div>
  );
};

export default SortComponent;
