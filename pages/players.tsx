import {
  Box,
  Tab,
  Tabs,
  Typography,
  Divider,
  Paper,
  Grid,
  Button,
  Avatar,
  ListItem,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import Image from "next/image";
import { TrendingDown, TrendingUp } from "@mui/icons-material";

const Players: FunctionComponent = () => {
  const [tab, setTab] = useState(0);
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)}>
          <Tab label="Strategy" />
          <Tab label="Main Player" />
          <Tab label="Reserve Player" />
          <Tab label="Recomendation" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 5 }}>
        {tab == 0 && (
          <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
            <List>
              {[...Array(10)].map((_, i) => (
                <ListItem disablePadding key={i}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Avatar alt="BP" src="/bp.jpg" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Bambang Pamungkas"
                      secondary="striker"
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box position="relative" height={1000} width={600}>
              {[...Array(10)].map((e, i) => (
                <Avatar
                  key={i}
                  alt="BP"
                  src="/bp.jpg"
                  sx={{
                    position: "absolute",
                    zIndex: 50,
                    top: 30 + i * 70,
                    left: 280,
                    width: 48,
                    height: 48,
                  }}
                />
              ))}
              <Image src="/soccer_field.png" layout="fill" />
            </Box>
          </Box>
        )}
        {tab == 1 && (
          <Grid container gap={2}>
            {[...Array(10)].map((_, i) => (
              <Grid item xs={2} key={i}>
                <PlayerCard tab={tab} key={i} />
              </Grid>
            ))}
          </Grid>
        )}
        {tab == 2 && (
          <Grid container gap={2}>
            {[...Array(10)].map((_, i) => (
              <Grid item xs={2} key={i}>
                <PlayerCard tab={tab} key={i} />
              </Grid>
            ))}
          </Grid>
        )}
        {tab == 3 && (
          <Grid container gap={2}>
            {[...Array(10)].map((_, i) => (
              <Grid item xs={2} key={i}>
                <PlayerCard tab={tab} key={i} />
              </Grid>
            ))}
            <Divider />
            <Typography textAlign="center">
              Powered by Gaebolg Recomendation Engine
            </Typography>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

interface PlayerCardProps {
  tab: number;
}

const PlayerCard: FunctionComponent<PlayerCardProps> = ({ tab }) => {
  return (
    <Paper sx={{ height: 600, width: 300 }}>
      <Box sx={{ height: 250, position: "relative" }}>
        <Image src={"/bp.jpg"} layout="fill" objectFit="cover" />
      </Box>
      <Box
        sx={{ padding: 2, display: "flex", gap: 1, flexDirection: "column" }}
      >
        <Typography variant="h5" component="h2">
          Bambang Pamungkas
        </Typography>
        <Typography variant="body1" component="h5">
          Striker
        </Typography>
        <Divider />
        <Grid container sx={{ paddingTop: 1 }}>
          {[
            "Passing",
            "Dribbling",
            "Shooting",
            "Goal",
            "Teamwork",
            "Blocking",
          ].map((e, i) => (
            <Grid item xs={4} key={e}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems={"center"}
                  gap={1}
                >
                  {i % 2 == 0 ? (
                    <TrendingUp color="success" />
                  ) : (
                    <TrendingDown color="error" />
                  )}
                  <Typography textAlign={"center"} variant="h6" component={"p"}>
                    10
                  </Typography>
                </Box>
                <Typography variant="caption" component="h5">
                  {e}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Button variant="contained">
          {tab == 1
            ? "Remove from active player"
            : tab == 2
            ? "Add to active player"
            : "Add player to roster"}
        </Button>
        <Button variant="contained">DETAIL</Button>
      </Box>
    </Paper>
  );
};

export default Players;
