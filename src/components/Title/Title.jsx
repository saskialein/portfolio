import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Title = (props) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h2 className="section-title">{props.title}</h2>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
