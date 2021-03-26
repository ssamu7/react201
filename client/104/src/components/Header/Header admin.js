import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render () {
        return(
            <header className="gnb_box">
                <div className="hd_top">
                    <div className="top_wrap ct1 af">
                    <ul className="hd_left af">
                        <li className="my1"><b>내정보</b>
                        </li>
                        <li  className="my2"><b><span>1</span>알림</b>
                        </li>
                    </ul>
                    <div className="hd_right">
                        <p><span>'홍길동'</span>님 반갑습니다.</p>
                    </div>
                    </div>
                </div>
                <div className="h_nav ct1 af">
                    <div className="logo">
                        <Link to={'/'}><img src={require("../../img/layout/logo.jpg")} height="65px" width="200px" alt=""/></Link>
                    </div>
                    <nav className="gnb gnb_admin">
                    <ul className="af">
                        <li className="menulist">
                            <Link to={'/UserApproval'}>사용자 관리</Link>
                        </li>
                        <li className="menulist">
                            <Link to={'/callList'}>음성통화 이용데이터 조회</Link>
                        </li>
                        <li className="menulist">
                            <Link to={'/callComposedChart'}>음성통화 이용데이터 차트</Link>
                        </li>
                        <li className="menulist">
                            <Link to={'/roamingList'}>로밍 조회</Link>
                        </li>
                        <li  className="menulist">
                            <Link to={'/roamingComposedChart'}>로밍 차트</Link>
                        </li>
                        <li  className="menulist">
                            <Link to={'/floatPopulationList'}>유동인구 조회</Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;