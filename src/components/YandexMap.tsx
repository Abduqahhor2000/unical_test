import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useGetLocationQuery } from "../store/features/apiSlice";
import { Box } from "@mui/material";

function YandexMap() {
  const { data: locations, isLoading, isError } = useGetLocationQuery();

  return (
    <>
    <Box sx={{px:3}}>
      <YMaps>
        <Map
          defaultState={{
            center: [41.31, 69.26],
            zoom: 10.5,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          width={"100%"}
          height={400}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          {locations
            ? locations.map((item) => {
                return (
                  <Placemark
                    key={item.id.toString()}
                    defaultGeometry={[item.lat, item.long]}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: "/taxi_icon.png",
                    }}
                  />
                );
              })
            : null}
        </Map>
      </YMaps>
    </Box>
      
    </>
  );
}

export default YandexMap;
