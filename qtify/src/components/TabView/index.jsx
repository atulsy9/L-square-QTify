import "./tabView.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Carousel from "../Carousel";
import { setAllSongs } from "../../App";
import { styled } from "@mui/material/styles";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ id, genresData }) => {
  const [value, setValue] = React.useState(0);
  const [filteredSong, setFilteredSong] = React.useState([]);
  const [data, setData] = React.useState([]);
  let tabViewComponent = [{ key: "all", label: "All" }, ...genresData];

  React.useEffect(() => {
    (async () => {
      const data = await setAllSongs();
      setData(data);
    })();
  }, []);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    setFilteredSong(filterTheSongs(data, e.target.textContent));
  };

  const filterTheSongs = (data, val) => {
    return data.filter((value) => {
      return value.genre.key.toLowerCase() === val.toLowerCase();
    });
  };

  const StyledTab = styled(Tab)({
    "&.Mui-selected": {
      color: "#FFFF",
    },
  });
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: { background: "#34c94b", color: "#34c94b" },
          }}
        >
          {tabViewComponent.map((val) => {
            return (
              <StyledTab
                label={val.label}
                {...a11yProps(val.key)}
                sx={{ color: "white", textTransform: "none", fontSize: "16px" }}
              />
            );
          })}
        </Tabs>
      </Box>
      {tabViewComponent.map((val, index) => {
        return (
          <CustomTabPanel value={value} index={index}>
            {val.key === "all" ? (
              <Carousel data={data} id={id} view={true} />
            ) : (
              <Carousel data={filteredSong} id={id} view={true} />
            )}
          </CustomTabPanel>
        );
      })}
    </Box>
  );
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
  };
}
