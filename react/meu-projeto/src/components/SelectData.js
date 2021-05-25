import PropTypes from 'prop-types';
function SelectData(props){
    return(
    <>
        <select id="id-pais" name="pais" defaultValue="">
        <option  value="" disabled>Selecione</option>
        {props.dataValues.map((item, i) =>{
            return <option value={item.value} key={i} id={i}>{item.text}</option>
        })}
        </select>
    </>
    );
}
SelectData.propTypes = {
    dataValues :  PropTypes.arrayOf(PropTypes.object)
}

SelectData.defaultProps={
    dataValues:[
        {value: 'AL', text: 'Alemanha'}
    ]
}

export default SelectData;