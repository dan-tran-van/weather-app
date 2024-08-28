import { Content } from "../../Content.ts";
import { CurrentConditions } from "../../../data/weatherData.ts";

export async function renderDetailCurrent(
  currentConditions: CurrentConditions
) {
  const CurrentSection = document.querySelector(".main__current");
  const CurrentDetail = document.createElement("div");
  CurrentDetail.classList.add("current__detail");

  // CurrentDetail.textContent = 'Detail';

  const DetailHumidity = document.createElement("div");
  DetailHumidity.classList.add("detail__detail-element");
  DetailHumidity.innerHTML = `
  <div class="detail-element__description">
    Humidity
  </div>
  <div class="detail-element__data">
    <div class="data__info">
     ${currentConditions.humidity}
     <div class="info__unit">%</div>
    </div> 
  </div> 
  `;

  const DetailVisibility = document.createElement("div");
  DetailVisibility.classList.add("detail__detail-element");
  DetailVisibility.innerHTML = `
  <div class="detail-element__description">
    Visibility 
  </div>
  <div class="detail-element__data">
    <div class="data__info">
      ${currentConditions.visibility}
      <div class="info__unit">km</div>
    </div>
  </div>
  `;

  const DetailWind = document.createElement("div");
  DetailWind.classList.add("detail__detail-element");
  DetailWind.innerHTML = `
  <div class="detail-element__description">
    Wind
  </div>
  <div class="detail-element__data">
    <div class="data__info">
      ${currentConditions.windspeed}
      <div class="info__unit">km/h</div>
    </div>
  </div>
  `;

  const DetailPrecipitation = document.createElement("div");
  DetailPrecipitation.classList.add("detail__detail-element");
  DetailPrecipitation.innerHTML = `
  <div class="detail-element__description">
    Precipitation
  </div>
  <div class="detail-element__data">
    <div class="data__info >
      ${currentConditions.precip}
      <div class="info__unit">mm</div>
    </div> 
    <div class="data__supply-info>
      ${currentConditions.precipprob}
      <div class="supply-info__unit">%</div>
    </div>
  </div>
  `;

  CurrentDetail.append(DetailHumidity, DetailVisibility, DetailWind, DetailPrecipitation);

  CurrentSection!.appendChild(CurrentDetail);
}
