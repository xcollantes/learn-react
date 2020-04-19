import Link from 'next/link';
import Header from '../comps/Header';
import PropLayout from '../comps/PropLayout';
import HigherOrderLayout from '../comps/HigherOrder';

const IndexThe = () => {
    
  <PropLayout>
    <p>Content via Layout</p>
  </PropLayout>

};


const Page = () => {
  <p>Content via Higher Order</p>;
};


export default IndexThe;
export HigherOrderLayout(Page);
