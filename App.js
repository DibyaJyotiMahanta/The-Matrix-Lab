import "./App.css";
import axios from "axios";

import React, { useEffect, useState } from "react";

export const App = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await axious.get("http://localhost:5000/getData");
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="macbook-pro">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img
            className="material-symbols"
            alt="Material symbols"
            src="material-symbols-info-outline.svg"
          />
          <img className="rectangle" alt="Rectangle" src="rectangle-9398.png" />
          <div className="ellipse" />
          <div className="div" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <div className="ellipse-5" />
          <div className="ellipse-6" />
          <div className="ellipse-7" />
          <div className="ellipse-8" />
          <div className="ellipse-9" />
          <div className="ellipse-10" />
          <div className="rectangle-2" />
          <div className="darkleft-side">
            <div className="overlap-group">
              <div className="overlap-group-2">
                <div className="rectangle-3" />
                <div className="home-tab-active">
                  <div className="text-wrapper">Token Address</div>
                </div>
                <div className="explore-tab">
                  <div className="text-wrapper-2">Pair Address</div>
                  <img
                    className="fluent-pair"
                    alt="Fluent pair"
                    src="fluent-pair-24-filled.svg"
                  />
                </div>
                <img
                  className="ic-baseline-token"
                  alt="Ic baseline token"
                  src="ic-baseline-token.svg"
                />
                <div className="text-wrapper-3">NFTify</div>
              </div>
              <img className="vector" alt="Vector" src="vector.svg" />
            </div>
            <img className="frame" alt="Frame" src="frame-1649.svg" />
            <div className="rectangle-4" />
          </div>
          <input type="search" className="rectangle-5" />
          <img className="img" alt="Vector" src="vector-2.svg" />
          <div className="rectangle-6" />
          <div className="rectangle-7" />
          <div className="rectangle-8" />
          <div className="ellipse-11" />
          <div className="ellipse-12" />
          <div className="ellipse-13" />
          <div className="text-wrapper-5">Token Search Results</div>
          <img
            className="mingcute-right-line"
            alt="Mingcute right line"
            src="mingcute-right-line.svg"
          />
          <img
            className="mingcute-right-line-2"
            alt="Mingcute right line"
            src="image.svg"
          />
          <img
            className="mingcute-right-line-3"
            alt="Mingcute right line"
            src="mingcute-right-line-2.svg"
          />
          <img
            className="ic-outline-info"
            alt="Ic outline info"
            src="ic-outline-info.svg"
          />
          <img
            className="ic-outline-info-2"
            alt="Ic outline info"
            src="ic-outline-info-4.svg"
          />
          <img
            className="ic-outline-info-3"
            alt="Ic outline info"
            src="ic-outline-info-5.svg"
          />
          <img
            className="ic-outline-info-4"
            alt="Ic outline info"
            src="ic-outline-info-2.svg"
          />
          <img
            className="ic-outline-info-5"
            alt="Ic outline info"
            src="ic-outline-info-3.svg"
          />
          <img
            className="mingcute-right-line-4"
            alt="Mingcute right line"
            src="mingcute-right-line-3.svg"
          />
          <img
            className="mingcute-right-line-5"
            alt="Mingcute right line"
            src="mingcute-right-line-4.svg"
          />
          <div className="text-wrapper-6">Basic Info</div>
          <div className="text-wrapper-7">Basic Info</div>
          <div className="text-wrapper-8">Basic Info</div>
          <div className="text-wrapper-9">Pair created at</div>
          <div className="text-wrapper-10">Pair created at</div>
          <div className="text-wrapper-11">Pair created at</div>
          <div className="text-wrapper-12">Symbol</div>
          <div className="text-wrapper-13">Symbol</div>
          <div className="text-wrapper-14">Symbol</div>
          <div className="text-wrapper-15">Dex ID</div>
          <div className="text-wrapper-16">Dex ID</div>
          <div className="text-wrapper-17">Dex ID</div>
          <div className="text-wrapper-18">Pair Address</div>
          <div className="text-wrapper-19">Pair Address</div>
          <div className="text-wrapper-20">Pair Address</div>
          <div className="text-wrapper-21">#7890</div>
          <div className="text-wrapper-22">#7890</div>
          <div className="text-wrapper-23">#7890</div>
          <div className="text-wrapper-24">#6754</div>
          <div className="text-wrapper-25">#6754</div>
          <div className="text-wrapper-26">#6754</div>
          <div className="text-wrapper-27">Etherium</div>
          <div className="text-wrapper-28">Etherium</div>
          <div className="text-wrapper-29">Etherium</div>
          <div className="text-wrapper-30">ETH</div>
          <div className="text-wrapper-31">ETH</div>
          <div className="text-wrapper-32">ETH</div>
          <div className="rectangle-9" />
          <div className="rectangle-10" />
          <div className="rectangle-11" />
          <div className="ellipse-14" />
          <div className="ellipse-15" />
          <div className="ellipse-16" />
          <div className="text-wrapper-33">Base Token</div>
          <div className="text-wrapper-34">Base Token</div>
          <div className="text-wrapper-35">Base Token</div>
          <div className="text-wrapper-36">Name</div>
          <div className="text-wrapper-37">Name</div>
          <div className="text-wrapper-38">Name</div>
          <div className="text-wrapper-39">Symbol</div>
          <div className="text-wrapper-40">Symbol</div>
          <div className="text-wrapper-41">Symbol</div>
          <div className="text-wrapper-42">Address</div>
          <div className="text-wrapper-43">Address</div>
          <div className="text-wrapper-44">Address</div>
          <div className="text-wrapper-45">#7890</div>
          <div className="text-wrapper-46">#7890</div>
          <div className="text-wrapper-47">#7890</div>
          <div className="text-wrapper-48">Etherium</div>
          <div className="text-wrapper-49">Etherium</div>
          <div className="text-wrapper-50">Etherium</div>
          <div className="text-wrapper-51">ETH</div>
          <div className="text-wrapper-52">ETH</div>
          <div className="text-wrapper-53">ETH</div>
          <div className="rectangle-12" />
          <div className="rectangle-13" />
          <div className="rectangle-14" />
          <div className="ellipse-17" />
          <div className="ellipse-18" />
          <div className="ellipse-19" />
          <div className="text-wrapper-54">Quote Token</div>
          <div className="text-wrapper-55">Quote Token</div>
          <div className="text-wrapper-56">Quote Token</div>
          <div className="text-wrapper-57">Name</div>
          <div className="text-wrapper-58">Name</div>
          <div className="text-wrapper-59">Name</div>
          <div className="text-wrapper-60">Symbol</div>
          <div className="text-wrapper-61">Symbol</div>
          <div className="text-wrapper-62">Symbol</div>
          <div className="text-wrapper-63">Address</div>
          <div className="text-wrapper-64">Address</div>
          <div className="text-wrapper-65">Address</div>
          <div className="text-wrapper-66">#7890</div>
          <div className="text-wrapper-67">#7890</div>
          <div className="text-wrapper-68">#7890</div>
          <div className="text-wrapper-69">Etherium</div>
          <div className="text-wrapper-70">Etherium</div>
          <div className="text-wrapper-71">Etherium</div>
          <div className="text-wrapper-72">ETH</div>
          <div className="text-wrapper-73">ETH</div>
          <div className="text-wrapper-74">ETH</div>
          <div className="rectangle-15" />
          <div className="rectangle-16" />
          <div className="rectangle-17" />
          <div className="ellipse-20" />
          <div className="ellipse-21" />
          <div className="ellipse-22" />
          <img
            className="pepicons-pop-dollar"
            alt="Pepicons pop dollar"
            src="pepicons-pop-dollar-4.svg"
          />
          <img
            className="pepicons-pop-dollar"
            alt="Pepicons pop dollar"
            src="pepicons-pop-dollar-3.svg"
          />
          <div className="text-wrapper-75">Price</div>
          <div className="text-wrapper-76">Price</div>
          <div className="text-wrapper-77">Price</div>
          <div className="text-wrapper-78">Price Native</div>
          <div className="text-wrapper-79">Price Native</div>
          <div className="text-wrapper-80">Price Native</div>
          <div className="text-wrapper-81">Price USD</div>
          <div className="text-wrapper-82">Price USD</div>
          <div className="text-wrapper-83">Price USD</div>
          <div className="text-wrapper-84">ETH 7.00</div>
          <div className="text-wrapper-85">ETH 7.00</div>
          <div className="text-wrapper-86">ETH 7.00</div>
          <div className="text-wrapper-87">1.8m</div>
          <div className="text-wrapper-88">1.8m</div>
          <div className="text-wrapper-89">1.8m</div>
          <img
            className="material-symbols-2"
            alt="Material symbols"
            src="material-symbols-token-outline.svg"
          />
          <img
            className="material-symbols-3"
            alt="Material symbols"
            src="material-symbols-token-outline-9.svg"
          />
          <img
            className="material-symbols-4"
            alt="Material symbols"
            src="material-symbols-token-outline-10.svg"
          />
          <img
            className="material-symbols-5"
            alt="Material symbols"
            src="material-symbols-token-outline-2.svg"
          />
          <img
            className="material-symbols-6"
            alt="Material symbols"
            src="material-symbols-token-outline-3.svg"
          />
          <img
            className="material-symbols-7"
            alt="Material symbols"
            src="material-symbols-token-outline-4.svg"
          />
          <img
            className="material-symbols-8"
            alt="Material symbols"
            src="material-symbols-token-outline-5.svg"
          />
          <img
            className="material-symbols-9"
            alt="Material symbols"
            src="material-symbols-token-outline-6.svg"
          />
          <img
            className="material-symbols-10"
            alt="Material symbols"
            src="material-symbols-token-outline-7.svg"
          />
          <img
            className="material-symbols-11"
            alt="Material symbols"
            src="material-symbols-token-outline-8.svg"
          />
          <img
            className="pepicons-pop-dollar"
            alt="Pepicons pop dollar"
            src="pepicons-pop-dollar.svg"
          />
          <img
            className="pepicons-pop-dollar-2"
            alt="Pepicons pop dollar"
            src="pepicons-pop-dollar-2.svg"
          />
          <div className="rectangle-18" />
          <div className="create-wallet">Connect</div>
          <img
            className="pepicons-pop-dollar-3"
            alt="Pepicons pop dollar"
            src="pepicons-pop-dollar-5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
