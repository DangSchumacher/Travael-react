import React from "react";
import FormPrice from "../../../Component/FormPrice/FormPrice";
import ListCardTour from "../../../Component/ListCardTour/ListCardTour";
export default function TourEurope() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <FormPrice name="Du lịch Châu Âu"></FormPrice>
      <ListCardTour></ListCardTour>
    </div>
  );
}
