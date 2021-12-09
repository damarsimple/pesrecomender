import { Edit, TrendingDown, TrendingUp } from "@mui/icons-material";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { FunctionComponent } from "react";

const Team: FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: 10,
        paddingX: 10,
      }}
    >
      <Box display="flex" alignItems="center" gap={3}>
        <Typography variant="h3" component="h1">
          PERSIB BANDUNG
        </Typography>
        <Box sx={{ color: "white" }}>
          <Edit />
        </Box>
      </Box>
      <Divider />
      <Grid
        container
        sx={{
          padding: 3,
        }}
        gap={3}
      >
        {[
          "Win",
          "Loss",
          "Goals",
          "Shot",
          "Possession",
          "Pass",
          "Rating",
          "League",
          "Matches",
          "Current Player",
          "Reserve Player",
        ].map((e, i) => (
          <Grid item xs={2} key={e}>
            <Paper
              sx={{
                padding: 3,
                display: "flex",
                gap: 1,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography textAlign={"center"} variant="body1" component="p">
                {e}
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems={"center"}
                gap={2}
              >
                {i % 2 == 0 ? (
                  <TrendingUp color="success" />
                ) : (
                  <TrendingDown color="error" />
                )}
                <Typography textAlign={"center"} variant="h3" component={"p"}>
                  10
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
