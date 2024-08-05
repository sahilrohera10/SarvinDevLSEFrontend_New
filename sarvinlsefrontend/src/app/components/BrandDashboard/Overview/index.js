import { useEffect } from "react";
import { Chart } from "chart.js";
import MetricCards from "../../commons/MetricCard";
import Engagement from "../../commons/icons/engagmentrate.png";
import Ca from "../../commons/icons/ca.png";
import Coaching from "../../commons/icons/coaching.png";
import Podium from "../../commons/icons/podium.png";
import Image from "next/image";
function Example() {
  var xValues = ["McDonalds", "KFC", "MFC", "Santa Banta", "KKSnacks"];
  var yValues = [55, 49, 44, 24, 15];
  var barColors = ["#ff9f3f", "#4bc0c0", "#a0d0f5", "#e8c3b9", "#ffb2c2"];

  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var ctx1 = document.getElementById("config").getContext("2d");
    var ctx2 = document.getElementById("doughnut").getContext("2d");
    var myChart2 = new Chart(ctx1, {
      type: "polarArea",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Brands Marketting Campaign of Same Location",
        },
      },
    });
    var myChart2 = new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Brands Marketting Campaign of Same Category in Same",
        },
      },
    });

    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            data: [6, 3, 2, 2, 7, 0, 16],
            label: "Followers Count",
            borderColor: "#a0d0f5",
            backgroundColor: "#d78f89",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: (ctx) =>
              "Point Style: " + ctx.chart.data.datasets[0].pointStyle,
          },
        },
      },
    });
  }, []);
  return (
    <div>
      <div class="flex mx-10 my-4 justify-between">
        <MetricCards
          value={"245390"}
          title="Quality Audience"
          icon={<Image src={Ca} width={48} height={0} alt="Icon" />}
          trend={{
            slope: -1,
            description: "Compared to last week",
            value: "0.5%",
          }}
        />
        <MetricCards
          value={"27.5%"}
          title="Engagement Rate"
          icon={<Image src={Engagement} width={48} height={0} alt="Icon" />}
          trend={{
            slope: -1,
            description: "Compared to last week",
            value: "0.5%",
          }}
        />
        <MetricCards
          value={"14th"}
          title="Country Rank"
          icon={<Image src={Coaching} width={48} height={0} alt="Icon" />}
          trend={{
            slope: -1,
            description: "Compared to last week",
            value: "0.5%",
          }}
        />
        <MetricCards
          value={"2nd"}
          title="Location Rank"
          icon={<Image src={Podium} width={48} height={0} alt="Icon" />}
          trend={{
            slope: -1,
            description: "Compared to last week",
            value: "0.5%",
          }}
        />
        <MetricCards
          value={"2nd"}
          title="Location Rank"
          icon={<Image src={Engagement} width={48} height={0} alt="Icon" />}
          trend={{
            slope: -1,
            description: "Compared to last week",
            value: "0.5%",
          }}
        />
      </div>
      <div className="flex gap-2 mx-10">
        <div className="border border-gray-400 pt-0 w-2/3  h-1/2 rounded-xl shadow-xl">
          <canvas id="myChart"></canvas>
        </div>
        <div className="border border-gray-400 pt-0 w-1/3  h-1/2 rounded-xl shadow-xl p-6">
          <canvas id="config"></canvas>
          <br />
          <canvas id="doughnut"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Example;
