import { useEffect } from "react";
import { Chart } from "chart.js";
import MetricCards from "../../commons/MetricCard";
import Engagement from "../../commons/icons/engagmentrate.png";
import Image from "next/image";
function Example() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");

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
            borderColor: "#c45850",
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
    <div class="flex">
      <div class="w-4.5/6">
        <div class="flex mx-10 my-4 gap-2 justify-between">
          <MetricCards
            value={"245390"}
            title="Quality Audience"
            icon={<Image src={Engagement} width={48} height={0} alt="Icon" />}
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
            title="Country Rank(India)"
            icon={<Image src={Engagement} width={48} height={0} alt="Icon" />}
            trend={{
              slope: -1,
              description: "Compared to last week",
              value: "0.5%",
            }}
          />
          <MetricCards
            value={"2nd"}
            title="Location Rank(Bareilly)"
            icon={<Image src={Engagement} width={48} height={0} alt="Icon" />}
            trend={{
              slope: -1,
              description: "Compared to last week",
              value: "0.5%",
            }}
          />
        </div>
        <div className="w-full flex mx-10">
          <div className="border border-gray-400 pt-0 w-2/3  h-1/2 rounded-xl shadow-xl">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;
