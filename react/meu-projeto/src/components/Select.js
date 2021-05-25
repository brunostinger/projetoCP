import SelectData from './SelectData'
const values = [
{value: "BR", text: "Brazil"},
{value: "AR", text: "Argentina"},
{value: "BO", text: "Bolivia"},
{value: "PR", text: "Para guai"},
]
function Select(){
    return(
        <form className="space">
        <label htmlFor="id-pais">Selecione o país</label>
        <SelectData  dataValues={values}/>
        </form>
    );
}
export default Select;