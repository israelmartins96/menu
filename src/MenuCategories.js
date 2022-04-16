// ***COMPONENT FOR MENU CATEGORIES TABS*** //
const MenuCategories = ({ categories, filterByCategory }) => {
    return(
        <div className='menu-categories'>
            {
                categories.map(
                    (category, index) => {
                        return(
                            <div key={ index } className='category'><button type='button' className='filter-button' onClick={ () => { filterByCategory(category) } }>{ category }</button></div>
                        );
                    }
                )
            }
        </div>
    );
};

// ***EXPORT*** //
export default MenuCategories;