import { EmojiEvents, Paid, Place, Stars } from "@mui/icons-material";
import { Box, Divider, Paper, Typography } from "@mui/material";

export default function Index() {
  return (
    <Box display="flex" flexDirection={"column"} gap={1} p={10} px={20}>
      <Typography variant="h6" component={"h2"}>
        Upcoming
      </Typography>
      <LeagueCard
        key={"upcoming"}
        name="INDONESIA GOLDEN LEAGUE"
        tier={"gold"}
        prizepool="Rp. 100.000.000.000"
        start_at="10/12/2021, 9.30 AM"
        place="Jakarta, Indonesia"
      />
      <Divider />
      <Typography variant="h6" component={"h2"}>
        Ongoing
      </Typography>
      <LeagueCard
        key={"ongoing"}
        name="INDONESIA SILVER LEAGUE"
        tier={"silver"}
        prizepool="Rp. 50.000.000.000"
        start_at="10/12/2021, 9.30 AM"
        place="Lombok, Indonesia"
      />
      <Divider />
      <Typography variant="h6" component={"h2"}>
        Finished
      </Typography>
      <LeagueCard
        key={"finished"}
        name="INDONESIA BROWN LEAGUE"
        tier={"brown"}
        prizepool="Rp. 10.000.000.000"
        start_at="10/12/2021, 9.30 AM"
        winner="Persipura Jayapura"
        place="Persipura, Indonesia"
      />
    </Box>
  );
}

const LeagueCard = ({
  name,
  start_at,
  tier,
  winner,
  prizepool,
  place,
}: {
  name: string;
  winner?: string;
  prizepool: string;
  start_at: string;
  tier: "gold" | "silver" | "brown";
  place: string;
}) => {
  return (
    <Paper
      sx={{
        minWidth: "100%",
        padding: 3,
        display: "flex",
        gap: 4,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Box
          display="flex"
          flexDirection={"column"}
          gap={1}
          justifyContent={"center"}
          alignItems="center"
          sx={{ backgroundColor: tier }}
          p={1}
        >
          <Typography
            sx={{ color: "black" }}
            variant="caption"
            component={"h6"}
          >
            TIER
          </Typography>
          <Typography
            sx={{ color: "black", fontWeight: 900 }}
            variant="h4"
            component={"h6"}
          >
            {tier == "gold" ? 1 : tier == "silver" ? 2 : 3}
          </Typography>
        </Box>
        <Typography variant="h4" component={"h6"}>
          {name}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Place />
        <Typography variant="h6" component={"h6"}>
          {place}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <EmojiEvents />
        <Typography variant="h6" component={"h6"}>
          {winner ?? "TBD"}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Paid />
        <Typography variant="h6" component={"h6"}>
          {prizepool}
        </Typography>
      </Box>
      <Typography variant="h6" component={"h6"}>
        {start_at}
      </Typography>
    </Paper>
  );
};
