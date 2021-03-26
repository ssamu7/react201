import React, { Component } from 'react';
import axios from "axios";

class callList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount() {
        this.callFloatPopulListApi()
    }

    callFloatPopulListApi = async () => {
            axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002353&'+
            'TDCAccessKey=f7c857088da5680d9cbbaf992adb71d391250f415151f4fcc7bd0801bb0d7fa4&$count=30', {
            })
            .then( response => {
                try {
                    this.setState({ responseFPList: response });
                    this.setState({ append_FPList: this.FloatPopulListAppend() });
                } catch (error) {
                    alert(error)
                }
            })
            .catch( error => {alert(error);return false;} );
    }

    FloatPopulListAppend = () => {
        let result = []
        var FPList = this.state.responseFPList.data
        var jsonString = JSON.stringify(FPList)
        jsonString = jsonString.replace(/\(YYYYMMDD\)/g, '')
        jsonString = jsonString.replace(/\(시도\)/g, '')
        jsonString = jsonString.replace(/\(시군구\)/g, '')
        jsonString = jsonString.replace(/\(시군구내\)/g, '')
        var json = JSON.parse(jsonString)
        

        for(let i=0; i<json.entry.length; i++){
            var data = json.entry[i]
            var idx = i+1
            result.push(
                <tr class="hidden_type">
                    <td>{idx}</td>
                    <td>{data.일자}</td>
                    <td>{data.연령}</td>
                    <td>{data.성별}</td>
                    <td>{data.발신지}</td>
                    <td>{data.대분류}</td>
                    <td>{data.통화비율}</td>
                </tr>
            )
        }
        return result
    }

    render () {
        return (
            <section class="sub_wrap" >
                <article class="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div class="li_top">
                        <h2 class="s_tit1">로밍서비스 이용데이터 - 21년 02월</h2>
                    </div>
                    <div class="list_cont list_cont_admin">
                        <table class="table_ty1 fp_tlist">
                            <tr>
                                <th>Row</th>
                                <th>일자(YYYYMMDD)</th>
                                <th>연령</th>
                                <th>성별</th>
                                <th>발신지</th>
                                <th>대분류</th>
                                <th>통화비율</th>
                            </tr>
                        </table>	
                        <table class="table_ty2 fp_tlist">
                            {this.state.append_FPList}
                        </table>
                    </div>
                </article>
            </section>
        );
    }
}

export default callList;