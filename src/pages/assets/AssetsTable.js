import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import api from "../../api";
import UptycsTable from "../../common/UptycsTable";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  progress: {
    margin: "0 50%"
  },
});

const columnDefinitions = [
  { id: 'hostname',  label: "Hostname" },
  { id: 'os',  label: "OS" },
  { id: 'ip',  label: "IP address" },
  {
    id: 'enrolledAt',
    label: "Enrolled at",
    render: columnValue => columnValue && columnValue.toLocaleString()
  }
];

function AssetsTable(props) {
  const { classes } = props;
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get("/assets").then(items => {
      console.log('--->items: ', items);
      setAssets(items);
      setLoading(false);
    });
  }, []);

  // TODO show loading indicator
  return (
    <div className={classes.root}>
      {loading ? <CircularProgress className={classes.progress}></CircularProgress>
              : <UptycsTable
              keyColumn="id"
              columns={columnDefinitions}
              data={assets}
              isPagination={true}
              headerCellFontWeight={300}
            />
      }
      
    </div>
  );
}

export default withStyles(styles)(AssetsTable);
