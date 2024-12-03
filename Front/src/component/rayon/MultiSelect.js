import React from 'react';
import Select from 'react-select';

const colourOptions = [
  { value: 'pgc', label: 'PGC', color: '#666' },
  { value: 'em', label: 'EM', color: '#666' },
  { value: 'clothing', label: 'CLOTHING', color: '#666' },
  { value: 'rayon1', label: 'RAYON', color: '#666' },
  { value: 'rayon2', label: 'RAYON', color: '#666' },
  { value: 'rayon3', label: 'RAYON', color: '#666' }
];

const colourStyles = {
  control: (styles) => ({ 
    ...styles, 
    backgroundColor: 'white',
    minHeight: '30px', // Reduce the control height
    fontSize: '12px', // Smaller font size

  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isDisabled
      ? undefined
      : isSelected
      ? data.color
      : isFocused
      ? '#eee'
      : undefined,
    color: '#333',
    cursor: isDisabled ? 'not-allowed' : 'default',
    fontSize: '12px', // Smaller font size for options
    ':active': {
      ...styles[':active'],
      backgroundColor: !isDisabled ? data.color : undefined,
    },
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: '#ccc',
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: '#333',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: '#666',
    ':hover': {
      backgroundColor: '#555',
      color: 'white',
    },
  }),
  // Adjusting the height of the value container and input to align with the reduced control height
  valueContainer: (styles) => ({
    ...styles,
    padding: '0 6px', // Reduced padding
    height: '30px', // Aligning the height with the control
  }),
  input: (styles) => ({
    ...styles,
    margin: 0, // Adjusting margin to align text
    padding: 0, // Adjusting padding to align text
  }),
};

const MultiSelect = () => {
  return (
    <div style={{ position: 'relative', top: '25px', left: '10px', maxWidth: '300px' }}>

    <Select
      closeMenuOnSelect={false}
      defaultValue={[colourOptions[2], colourOptions[3]]}
      isMulti
      options={colourOptions}
      styles={colourStyles}
    />
    </div>
  );
};

export default MultiSelect;
