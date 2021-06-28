import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import { roadmapData } from "../data/RoadmapData";

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1
    };
  }

  //state = { value: 0, previous: 0 };

  render() {
    const { curIdx, prevIdx } = this.state;
    const curStatus = roadmapData[curIdx].statusB;
    const prevStatus = prevIdx >= 0 ? roadmapData[prevIdx].statusB : "";

    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "100px",
            margin: "0 auto",
            marginTop: "20px",
            fontSize: "15px",
          }}
        >
          <HorizontalTimeline
            styles={{
              
              foreground: "#317481",
              outline: "#dfdfdf"
            }}
            index={this.state.curIdx}
            indexClick={(index) => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, prevIdx: curIdx });
            }}
            values={roadmapData.map((x) => x.data)}
          />
        </div>
        <div style={{
            textAlign: "center"
          }}>
          {/* Prevoius:-{prevStatus} - Current Select:-{curStatus} */}
          {curStatus}
        </div>
      </div>
    );
  }
}
