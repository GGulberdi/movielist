import React from "react";
import { Doughnut } from "react-chartjs-2";
import { div, Row, Col } from "react-bootstrap";
import { MdLocalMovies, MdChildCare } from "react-icons/md";
import { FaTheaterMasks, FaRegSmile, FaRegLaughBeam } from "react-icons/fa";
import { GiSkullCrossedBones } from "react-icons/gi";

const state = {
  labels: ["Drama", "Actions", "Kids", "Horror", "Thrilled", "Comedy"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: [
        "#e20e02",
        "#C9DE00",
        "#008500",
        "#0014a8",
        "#0014a0",
        "#e20e09",
      ],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#003350",
        "#501800",
      ],
      data: [50, 40, 20, 30, 35, 10],
    },
  ],
};
export default class Doughnut2 extends React.Component {
  render() {
    return (
      <div className="doughnut2-wrapper">
          <div className="doughnut2-header-wrapper">
            <p className="doughnut2-title"> Top Category </p>
            <select>
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
            </select>
          </div>
          <div className="doughnut2-row2">
             <div className="doughnut2-chart-container">
                <Doughnut
                    data={state}
                    height='300px'
                    options={{
                        maintainAspectRatio: false,
                    title: {
                        display: true,
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: "left", 
                        border:"none"
                    },
                    }}
                />
             </div>
             <div className="doughnut2-info-container">
                  <div className="doughnut2-info-item">
                        <div className="mini-divs-icon"><FaTheaterMasks/></div> 
                        <div className="doughnut2-genre-percentage">
                            <p>DRAMA</p>
                            <p>+35%</p>
                        </div>
                  </div>
                  <div className="doughnut2-info-item">
                            <div className="mini-divs-icon"><MdLocalMovies/></div>
                            <div className="doughnut2-genre-percentage">
                                <p>ACTIONS</p>
                                <p>+34%</p>
                           </div>
                  </div>
                  <div className="doughnut2-info-item">
                            <div className="mini-divs-icon"><MdChildCare/></div>
                            <div className="doughnut2-genre-percentage">
                                <p>KIDS</p>
                                <p>+45%</p>
                           </div>
                  </div>
                  <div className="doughnut2-info-item">
                            <div className="mini-divs-icon"><FaRegLaughBeam/></div>
                            <div className="doughnut2-genre-percentage">
                                <p>THRILLER</p>
                                <p>+65%</p>
                           </div>
                  </div>
                  <div className="doughnut2-info-item">
                            <div className="mini-divs-icon"><FaRegSmile/></div>
                            <div className="doughnut2-genre-percentage">
                                <p>COMEDY</p>
                                <p>+27%</p>
                           </div>
                  </div>
                  <div className="doughnut2-info-item">
                            <div className="mini-divs-icon"><GiSkullCrossedBones/></div>
                            <div className="doughnut2-genre-percentage">
                                <p>HORROR</p>
                                <p>+56%</p>
                           </div>
                  </div>
             </div>
          </div>
      </div>
    );
  }
}
