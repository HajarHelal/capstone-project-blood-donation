import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import Button from '../Button';

function ReadytoDonate({ header, text }) {
  const history = useHistory();
  return (
    <div className="bg-white ">
      <div className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
        {header}
      </div>
      <div className="text-black text-xl sm:text-1xl md:text-2xl lg:text-2xl">{text}</div>
      <div>
        <Button text="Donate" onclick={() => history.push('./Donate')} />
      </div>
    </div>
  );
}

ReadytoDonate.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};
// Specifies the default values for props:
ReadytoDonate.defaultProps = {
  header: 'Ready to Donate?',
  text: 'It does not make much time and every donation has the power to save up to three lives',
};
export default ReadytoDonate;