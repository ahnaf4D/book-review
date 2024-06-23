import { useEffect, useState } from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
import { getBooks } from '../../utils';
const PagesToRead = () => {
  const [readData, setReadData] = useState([]);
  useEffect(() => {
    const data = getBooks();
    setReadData(data);
  }, []);
  console.log(readData);
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />;
  };
  return (
    <div className='flex justify-center items-center my-4 w-full'>
      <BarChart
        width={790}
        height={470}
        data={readData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='bookName' />
        <YAxis />
        <Bar
          dataKey='totalPages'
          fill='#8884d8'
          shape={<TriangleBar />}
          label={{ position: 'top' }}
        >
          {readData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagesToRead;
