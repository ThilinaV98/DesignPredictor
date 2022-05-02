import "./widgetLarge.css";

export default function WidgetLarge(){

  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Product</h3>
      <form>
        <table className="widgetLargeTable">
          <tr className="widgetLargeTr">
            <th className="widgetLargeTh">Procut</th>
            <th className="widgetLargeTh">Quntity</th>
            <th className="widgetLargeTh">Price</th>
          </tr>
          <tr className="widgetLargeTr">
            <td className="widgetLargeProduct">
              <img
                src="https://cdn.shopify.com/s/files/1/2472/1934/products/ladies_maple_printed_t-shirt_2_1024x1024_grande.jpg?v=1513666474"
                alt=""
                className="widgetLargeImg"
              />
              <span className="widgetLargeName">T-Shirt</span>
            </td>
            <td className="widgetLargeQuntity"></td>
            <td className="widgetLargePrice">RS.1,500</td>
          </tr>
        </table>
      </form>
    </div>
  );
}
