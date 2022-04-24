import './widgetSmall.css'

export default function WidgetSmall() {
  return (
    <div className='widgetSmall'>
      <span className="widgetSmallTitle">Members</span>
      <ul className="widgetSmallList">
          <li className="widgetSmallListItem">
              <img src="https://www.pinclipart.com/picdir/big/196-1966244_png-file-whatsapp-profile-photo-icon-clipart.png" alt="" className="widgetSmallImg" />
              <div className="widgetSmallUser">
                  <span className="widgetSmallUserName">Thilina Vithana</span>
                  <span className="widgetSmallUserTitle">Fashion Designer</span>
              </div>
          </li>
          <li className="widgetSmallListItem">
              <img src="https://www.pinclipart.com/picdir/big/196-1966244_png-file-whatsapp-profile-photo-icon-clipart.png" alt="" className="widgetSmallImg" />
              <div className="widgetSmallUser">
                  <span className="widgetSmallUserName">Thilina Vithana</span>
                  <span className="widgetSmallUserTitle">Fashion Designer</span>
              </div>
          </li>
      </ul>
    </div>
  )
}
