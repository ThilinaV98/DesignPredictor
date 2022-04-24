import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import WidgetLarge from "../../components/widgetLarge/WidgetLarge"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"
import "./home.css"

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <div className="homeWidgets">
          <WidgetSmall/>
          <WidgetLarge/>
        </div>
    </div>
  )
}
