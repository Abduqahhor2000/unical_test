import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DateRange } from "@mui/x-date-pickers-pro";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import dayjs, { Dayjs } from "dayjs";
import { useGetStatQuery } from "../store/features/apiSlice";

function StatInfo() {
  const { data: statData, isLoading } = useGetStatQuery();
  const [selectedButton, setSelectedButton] = useState("kunlik");
  const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([
    dayjs(new Date().getTime() - 86400000),
    dayjs(new Date()),
  ]);
  const [stat, setStat] = useState({
    orders: 0,
    expenses: 0,
    revenues: 0,
  });

  useEffect(() => {
    let initialValue = {
      orders: 0,
      expenses: 0,
      revenues: 0,
    };

    const start_date = new Date(dayjs(dateRange[0]).format()).getTime();
    const end_date = new Date(dayjs(dateRange[1]).format()).getTime();

    setStat(
      statData?.reduce((collector, value) => {
        const current_date = new Date(value.date).getTime();
        if (start_date < current_date && current_date < end_date) {
          if (value.type) {
            collector.orders += 1;
            collector.revenues += +value.amount;
          } else {
            collector.expenses += +value.amount;
          }
        }

        return collector;
      }, initialValue) || initialValue
    );
  }, [dateRange, statData]);

  if (isLoading) {
    return <>Loading...</>;
  }

  console.log(statData, isLoading, dateRange);

  return (
    <>
      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "white",
              height: "100%",
              borderRadius: 1,
              p: 3,
            }}
          >
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              {selectedButton.toUpperCase()} BO'YICHA NATIJA
            </Typography>
            <Typography variant="h6" component="h3">
              Tushumlar miqdori: {Math.ceil(stat.revenues * 100) / 100} $
            </Typography>
            <Typography variant="h6" component="h3">
              Buyurtmalar soni: {stat.orders}
            </Typography>
            <Typography variant="h6" component="h3">
              Xarajatlar miqdori: {Math.ceil(stat.expenses * 100) / 100} $
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "white",
              p: 2,
              borderRadius: 1,
              height: "100%",
            }}
          >
            <Box sx={{ p: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["SingleInputDateRangeField"]}>
                  <DateRangePicker
                    calendars={1}
                    value={dateRange}
                    onChange={(newRange) => {
                      setDateRange(newRange);
                      setSelectedButton("sana");
                    }}
                    slots={{ field: SingleInputDateRangeField }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
            <Box sx={{ p: 1 }}>
              <ButtonGroup>
                <Button
                  color="primary"
                  variant={
                    selectedButton === "kunlik" ? "contained" : "outlined"
                  }
                  onClick={() => {
                    setSelectedButton("kunlik");
                    setDateRange([
                      dayjs(new Date().getTime() - 86400000),
                      dayjs(new Date()),
                    ]);
                  }}
                >
                  Kunlik
                </Button>
                <Button
                  variant={
                    selectedButton === "haftalik" ? "contained" : "outlined"
                  }
                  onClick={() => {
                    setSelectedButton("haftalik");
                    setDateRange([
                      dayjs(new Date().getTime() - 604800000),
                      dayjs(new Date()),
                    ]);
                  }}
                >
                  Haftalik
                </Button>
                <Button
                  variant={
                    selectedButton === "oylik" ? "contained" : "outlined"
                  }
                  onClick={() => {
                    setSelectedButton("oylik");
                    setDateRange([
                      dayjs(new Date().getTime() - 2592000000),
                      dayjs(new Date()),
                    ]);
                  }}
                >
                  Oylik
                </Button>
                <Button
                  variant={
                    selectedButton === "yillik" ? "contained" : "outlined"
                  }
                  onClick={() => {
                    setSelectedButton("yillik");
                    setDateRange([
                      dayjs(new Date().getTime() - 31536000000),
                      dayjs(new Date()),
                    ]);
                  }}
                >
                  Yillik
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default StatInfo;
