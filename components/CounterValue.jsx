import { connect } from 'react-redux';

function CounterValue({ count }) {
  return <>{count}</>;
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(CounterValue);