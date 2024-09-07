const Header = ({title, subTitulo}) => {
    const headerStyle = {
    
        background: '#f2f4',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '1px solid #696969'
        
    }

    const titleStyle = 
    {
        margin: 0,
        fontSize: '15px',
        color: '#191970'
    }

    
    return (
      <header style={titleStyle} title="titulo" subTitulo ='new title'>
        <h1>{title}</h1>
        <h2>{subTitulo}</h2>
      </header>
    );
}

export default Header;