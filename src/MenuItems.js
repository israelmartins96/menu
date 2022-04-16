// ***COMPONENT FOR MENU ITEMS*** //
const MenuItems = ({ menuItems }) => {
    return(
        <div className='menu-items'>
            {
                menuItems.map(
                    ({ id, title, price, description, category, image }) => {
                        return(
                            <div key={ id } className='menu-item'>
                                <img src={ image } alt={ title } className='thumbnail' />
                                <div className='details'>
                                    <header className='title-and-price'>
                                        <h2 className='title'>{ title }</h2>
                                        <h6 className='price'>${ price }</h6>
                                    </header>
                                    <p className='description'>{ description }</p>
                                </div>
                            </div>
                        );
                    }
                )
            }
        </div>
    );
};

// ***EXPORT*** //
export default MenuItems;