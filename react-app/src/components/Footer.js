import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Link, Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React from "react";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(6, 0),
  },
  heartIcon: {
    verticalAlign: "middle",
  },
  appBadge: {
    marginRight: theme.spacing(2),
    width: "135px",
  },
  footerLink: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1">
              Made with <FavoriteIcon className={classes.heartIcon} /> by Group 4 for JPMC
            </Typography>
            <br/>
            <Typography variant="subtitle2">&copy; 2023 TripBuilderAI.</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom className={classes.footerLink}>
              TripBuilderAI
            </Typography>
            <Typography variant="subtitle1" className={classes.footerLink}>
              <Link href="/blog">Blog</Link>
            </Typography>
            <Typography variant="subtitle1" className={classes.footerLink}>
              <Link href="/security">Report security issue</Link>
            </Typography>
            <Typography variant="subtitle1" className={classes.footerLink}>
              <Link href="/terms">Terms of use</Link> &amp;{" "}
              <Link href="/privacy">Privacy policy</Link>
            </Typography>
            <Typography variant="subtitle1" className={classes.footerLink}>
              <Link href="/trip-planner-mobile-app">Mobile app</Link>
            </Typography>
            <Typography variant="subtitle1" className={classes.footerLink}>
              <Link href="/extension">Browser extension</Link>
            </Typography>
            <Typography variant="subtitle1" className={classes.footerLink}>
              <Link href="/travel-budget-expense-splitting-app">
                Travel budgeting &amp; cost tracking
              </Link>
            </Typography>
            <Typography variant="subtitle1" className={classes.footerLink}>
              <Link href="/embed-travel-map-on-blog">
                How to embed a map on your travel blog
              </Link>
            </Typography>
            <Typography variant="subtitle1" className={classes.footerLink}>
              <Link href="/blog/jobs/">Jobs</Link>
            </Typography>
            
            <Typography variant="subtitle1" className={classes.footerLink}>
              <Link href="/google-disclosure">Google data disclosure</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom className={classes.footerLink}>
              Guides and resources
            </Typography>
            <Typography variant="subtitle1" className={classes.footerLink}>
              <Link href="/tp">Trip planners by destination</Link>
            </Typography>
            <Typography variant="subtitle1" className={classes.footerLink}>
              <Link href="/drive">Road trips by destination</Link>
              </Typography>
              </Grid>
      <Grid item xs={12} sm={2}>
        <Typography variant="h6" gutterBottom className={classes.footerLink}>
          Follow us
        </Typography>
        <Typography variant="subtitle1" className={classes.footerLink}>
          <Link href="https://www.facebook.com/travelchime">Facebook</Link>
        </Typography>
        <Typography variant="subtitle1" className={classes.footerLink}>
          <Link href="https://twitter.com/travelchime">Twitter</Link>
        </Typography>
        <Typography variant="subtitle1" className={classes.footerLink}>
          <Link href="https://www.instagram.com/travelchime">Instagram</Link>
        </Typography>
        <Typography variant="subtitle1" className={classes.footerLink}>
          <Link href="https://www.youtube.com/travelchime">YouTube</Link>
        </Typography>
        <Typography variant="subtitle1" className={classes.footerLink}>
          <Link href="https://www.pinterest.com/travelchime">Pinterest</Link>
        </Typography>
        <Typography variant="subtitle1" className={classes.footerLink}>
          <Link href="https://travelchime.tumblr.com/">Tumblr</Link>
        </Typography>
        <Typography variant="subtitle1" className={classes.footerLink}>
          <Link href="https://www.linkedin.com/company/travelchime">LinkedIn</Link>
        </Typography>
      </Grid>
    </Grid>
  </Container>
</footer>
);
}