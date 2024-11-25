import Image from "next/image";
import { FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import FirstPlace from "../../commons/icons/FirstPlace.png";
import SecondPlace from "../../commons/icons/SecondPlace.png";
import ThirdPlace from "../../commons/icons/ThirdPlace.png";

const Tags = {
  1: FirstPlace,
  2: SecondPlace,
  3: ThirdPlace,
};
export default function CreaterCard({
  name = "Naman Agarwal",
  profession = "CEO and Founder",
  img = "https://tse1.mm.bing.net/th?id=OIP.K7lG3005eY-tEHwlxf61qgHaFx&pid=Api&P=0&w=300&h=300",
  tags = 0,
  deal_cracked = 20,
}) {
  return (
    <div className="max-w-sm bg-white relative group border shadow-lg rounded-lg mb-10">
      <a
        href="#"
        className="relative block  group-hover:opacity-70 transition-opacity duration-300"
      >
        <div className="relative overflow-hidden">
          {tags > 0 && tags < 4 && (
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row-reverse",
                width: "100%",
              }}
            >
              <div className="w-9 h-9">
                <Image
                  alt="Badge"
                  src={Tags[tags]}
                  layout="responsive"
                  width={36}
                  height={36}
                />
              </div>
            </div>
          )}
          <div className="w-full h-48">
            <Image
              alt="Profile"
              src={img}
              width={300}
              height={200}
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
          <div className="flex items-center space-x-3">
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaFacebookF className="text-white text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaTwitter className="text-white text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaPinterestP className="text-white text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaInstagram className="text-white text-xl opacity-80 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </a>
      <div className="p-5 bg-white">
        <div className="text-black text-xl font-semibold">{name}</div>
        <div className="text-gray-400 text-md">{profession}</div>
        <div className="text-gray-400 text-md">
          Deal Cracked Count: {deal_cracked}
        </div>
      </div>
    </div>
  );
}
