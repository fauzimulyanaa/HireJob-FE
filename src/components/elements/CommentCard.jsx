/* eslint-disable react/prop-types */

const CommentCard = ({ image, title, description, cardStyles, imageStyles }) => (
  <div style={cardStyles} className="bg-white shadow-md p-6 rounded-lg">
    <img src={image} alt="comment" style={imageStyles} className="mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default CommentCard;
