function Header(props){
    return(
        <>
        <h1 className="text-center h1">Informações de cada país</h1>
        <p>Olá, {props.nome}</p>
        </>
    );
}
export default Header;