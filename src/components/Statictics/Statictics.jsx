import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsTitle,
  StatList,
  StatItem,
  StatNumbers,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <span className="label">{label}</span>
            <StatNumbers>{percentage}%</StatNumbers>
          </StatItem>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
