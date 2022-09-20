import React from "react";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

const Tablechart = () => {
  const [subData, setSubData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  function submitData() {
    setFinalData((finalData) => [...finalData, subData]);
    setSubData((subData = {}));
    document.myForm.reset();
  }

  return (
    <div>
      <form name="myForm">
        <TableContainer
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            // paddingBottom: "10rem",
          }}
        >
          <Table
            style={{ width: "100%", justifyContent: "center" }}
            size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <TextField
                    value={subData["sub"]}
                    onChange={(e) =>
                      setSubData({ ...subData, sub: e.target.value })
                    }
                    label="Brand Name"
                    margin="normal"
                    variant="outlined"
                    color="secondary"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={subData["sem"]}
                    onChange={(e) =>
                      setSubData({ ...subData, sem: e.target.value })
                    }
                    label="Performance  /10"
                    margin="normal"
                    variant="outlined"
                    color="secondary"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => submitData(subData)}
                    color="primary"
                  >
                    Add Brand
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {finalData.map((data) => (
                <TableRow>
                  <TableCell>{data.sub}</TableCell>
                  <TableCell>{data.sem}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
      <br/>
      {/* <Chart data={finalData}/> */}
    </div>
  );
};

export default Tablechart;
