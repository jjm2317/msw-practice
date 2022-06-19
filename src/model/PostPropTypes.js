import PropTypes from 'prop-types';

const post = PropTypes.exact({
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  createdAt: PropTypes.string,
});

const PostPropTypes = {
  post,
};

export default PostPropTypes;
