import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

DropDownFilter.propTypes = {
  beasts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      image_url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      keyword: PropTypes.string.isRequired,
      horns: PropTypes.number.isRequired,
    })
  ).isRequired,
  // setBeasts: PropTypes.func.isRequired,

  // visibleBeasts: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     _id: PropTypes.number.isRequired,
  //     image_url: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired,
  //     description: PropTypes.string.isRequired,
  //     keyword: PropTypes.string.isRequired,
  //     horns: PropTypes.number.isRequired,
  //   })
  // ).isRequired,
  setVisibleBeasts: PropTypes.func.isRequired,
};

function DropDownFilter(props) {
  const handleChange = (event) => {
    props.setVisibleBeasts(props.beasts);
    const selectedValue = parseInt(event.target.value, 10);
    console.log(selectedValue);
    if (!isNaN(parseInt(selectedValue, 10))) {
      const filteredBeasts = props.beasts.filter(beast => beast.horns === parseInt(selectedValue, 10));
      props.setVisibleBeasts(filteredBeasts);
    } 
    if (selectedValue === 'All') {
      props.setVisibleBeasts(props.beasts);
    }
    console.log(selectedValue);
    console.log(props.beasts); 
    // console.log(filteredBeasts);
  };
  return (
<Form.Group>
      <Form.Label>Select Horns:</Form.Label>
      <Form.Select onChange={handleChange} aria-label="Default select example">
        <option value='All'>All</option>  
        <option value="1">1 Horn</option>
        <option value="2">2 Horns</option>
        <option value="3">3 Horns</option>
        <option value="100">100 Horns</option>
      </Form.Select>
    </Form.Group>
  );
}

export default DropDownFilter