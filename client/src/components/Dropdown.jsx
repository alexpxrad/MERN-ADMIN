import {useState} from 'react';


const Dropdown = () => {
  const options = [
    {value: '', text: 'Choose a Department'},
    {value: 'General', text: 'General Dentistry'},
    {value: 'Pediatric', text: 'Pediatric Dentistry'},
    {value: 'Restorative', text: 'Restorative Dentistry'},
    {value: 'Surgery', text: 'Surgery'},
    {value: 'Orthodontic', text: 'Orthodontic'},
];

  const [department, setDepartment] = useState(options[0].value);

  const handleChange = event => {
    console.log(event.target.value);
    setDepartment(event.target.value);
  };

  return (
    <div>
      <select value={department} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
