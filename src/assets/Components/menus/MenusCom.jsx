import "../../../App.css";
const MenusCom = ({ MenuItem }) => {
  console.log("menulist", MenuItem);

  return (
    <>
      <div className="w-7 d-flex justify-c">
        <ul className="menuitem">
          {MenuItem.map((ItemList) => {
            return <li><a href="">{ItemList}</a></li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default MenusCom;
