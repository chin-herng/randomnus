import '../App.css';
import SpinWheel from './SpinWheel';
import STORES from '../assets/place';
import { Link } from 'react-router-dom';

function Stores() {
  return (
    <div className="home-container" style={{ display: 'flex', flexDirection: 'column', overflow: 'scroll', maxHeight: '300px', paddingTop: '20px'}}>
      {STORES.map((elem) => (
        <Link to="/spin-food">
            <button className='button' style={{ marginBottom: '10px' }}>
                {elem}
            </button>
        </Link>
      ))}
    </div>
  )
}

export default Stores;
