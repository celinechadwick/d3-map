import * as d3 from "d3";
import React from "react";


export default class LineChart extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: [{'year': 2001, 'value':178},{'year': 1998, 'value':68},{'year': 1980, 'value':58},{'year': 2019, 'value':32},{'year': 2019, 'value':39}]

      }
    };
    drawChart() {
      const svg = d3.select(".body").append("svg").attr("width", "100%").attr("height", 800).attr("fill", "green");

      svg.selectAll("rect")
      .data(this.state.data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 0)
      .attr("width", 25)
      .attr("height", (d, i) => d.value*5)
      .attr("fill", "green");
      svg.append("path").datum(this.state.data.value).attr("fill", "none").attr("stroke", "steelblue").attr("stroke-linejoin", "round").attr("stroke-linecap", "round").attr("stroke-width", 1.5).attr("d", line);

      }

    componentDidMount() {

      this.drawChart();

    }

  render() {
  return(
  <div className="body">
  <p>SVG Below</p>
  </div>

  )

  }

}
