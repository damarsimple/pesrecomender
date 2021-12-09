import { Box, Container, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import Countdown from "react-countdown";

const Home: NextPage = () => {
  return (
    <Box p={10} px={24} display={"flex"} flexDirection={"column"} gap={3}>
      {[...Array(10)].map((_, i) => (
        <Paper
          key={i}
          sx={{
            padding: 4,
            backgroundColor: i == 1 ? "#ff8c00" : undefined,
          }}
        >
          <Box display="flex" justifyContent={"space-between"}>
            <Typography variant="h6" component="h5">
              10/12/2021, 10:30 AM
            </Typography>
            <Typography variant="h6" component="h5">
              INDONESIA GOLDEN LEAGUE
            </Typography>
          </Box>
          <Box display="flex" justifyContent={"center"} gap={3}>
            <Typography variant="h5" component="h3">
              {i == 1 ? "PERSIB BANDUNG" : "PERSIPURA LAMONGAN"}
            </Typography>
            <Typography variant="h5" component="h3">
              VS
            </Typography>
            <Typography variant="h5" component="h3">
              PERSIJA JAKARTA
            </Typography>
          </Box>
          <Box>
            <Countdown
              date={Date.now() + 50000}
              renderer={({ hours, minutes, seconds, completed }) => {
                if (completed) {
                  // Render a completed state
                  return <span>Pertandingan sudah dimulai</span>;
                } else {
                  // Render a countdown
                  return (
                    <span>
                      {hours}:{minutes}:{seconds}
                    </span>
                  );
                }
              }}
            />
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default Home;
