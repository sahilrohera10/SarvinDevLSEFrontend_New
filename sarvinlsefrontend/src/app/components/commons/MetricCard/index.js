import Image from "next/image";
import Increase from "../icons/increase.png";
import Decrease from "../icons/decrease.png";
export default function MetricCard({
  value = 0,
  title = "New Title",
  icon = null,
  trend = {},
}) {
  return (
    <div>
      <a
        href="#"
        class="block p-2 px-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div class="flex justify-between flex-row w-full">
          <div class=" flex font-semibold flex-col text-sm text-gray-900 dark:text-white justify-center ">
            {title}
          </div>
          <div>{icon}</div>
        </div>
        <div>
          <p class="font-semibold mb-2 font-sans text-2xl text-gray-700 dark:text-gray-400">
            {value}
          </p>
        </div>
        <div class="flex gap-2">
          {trend?.slope > 0 ? (
            <Image src={Increase} width={20} />
          ) : (
            <Image src={Decrease} width={20} />
          )}
          <div class="text-xs text-gray-700 dark:text-gray-400">
            {trend?.value}
          </div>
          <div class="text-xs font-light text-gray-700 dark:text-gray-400">
            {trend?.description}
          </div>
        </div>
      </a>
    </div>
  );
}
