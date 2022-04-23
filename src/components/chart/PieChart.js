import ReactApexChart from "react-apexcharts";
import React from "react"
import { Row,Col,Typography } from "antd";
export class PieChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

    
    render() {
        const { Title, Paragraph } = Typography;

        const items = [
          {
            Title: "3,6K",
            user: "Users",
          },
          {
            Title: "2m",
            user: "Clicks",
          },
          {
            Title: "$772",
            user: "Sales",
          },
          {
            Title: "82",
            user: "Items",
          },
        ];
        return (
          

    <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
<div style={{marginTop:'18px',textAlign:'center' }} >
    <Row gutter>
          {items.map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row>
        </div>

</div>
  

        );
      }
    }
