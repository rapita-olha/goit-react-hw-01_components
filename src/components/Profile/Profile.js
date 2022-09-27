import PropTypes from 'prop-types';
import s from './Profile.module.css';
import defaultImage from '../images/defaultImage.jpg';

const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes } }) => (
  <div className={s.profile}>
    <div className={s.box}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers: </span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views: </span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes: </span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  </div>
);

Profile.defaultProps = {
  name: 'unknown',
  avatar: defaultImage,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape(PropTypes.number.isRequired).isRequired,
};

export default Profile;
