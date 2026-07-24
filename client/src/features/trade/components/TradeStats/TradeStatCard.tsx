import {
  Card,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
  value: string | number;
  loading?: boolean;
}

export default function TradeStatCard({
  title,
  value,
  loading = false,
}: Props) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {title}
        </Typography>

        {loading ? (
          <Skeleton
            variant="text"
            width="60%"
            height={48}
            sx={{ mt: 1 }}
          />
        ) : (
          <Typography
            variant="h4"
            fontWeight={700}
            mt={1}
          >
            {value}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}