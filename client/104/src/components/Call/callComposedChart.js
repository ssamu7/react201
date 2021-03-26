import React, { Component } from 'react';
import { BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from "axios";

class callComposedChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount = async () => {
        axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002353&'+
            'TDCAccessKey=f7c857088da5680d9cbbaf992adb71d391250f415151f4fcc7bd0801bb0d7fa4&$count=30', {
        })
        .then( response => {
            try {
                this.setState({ responseFPList: response });
                this.setState({ append_FPList: this.state.responseFPList.data.entry });
            } catch (error) {
                alert(error)
            }
        })
        .catch( error => {alert(error);return false;} );
    }

    render () {
        return (
            <BarChart
              width={2000}
              height={400}
              data={this.state.append_FPList}
              margin={{
                top: 100, right: 50, left: 420, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="발신지(시도)" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="통화비율(시군구내)" fill="#82ca9d" />
            </BarChart>
        );
    }
}

export default callComposedChart;