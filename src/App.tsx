import React, { useState } from "react";
import { Button, styled, TextField, Typography } from "@mui/material";
import scrape from './scraper/scraper';

const StyledInputWrapperDiv = styled("div")({
  display: "flex",
  gap: 15,
  alignItems: "center",
  justifyContent: "center",
  padding: "15px 0",
});

const StyledPageWrapperDiv = styled("div")({
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

function App() {
  const [searchString, setSearchString] = useState<string>();
  // const [presentTags, setPresentTags] = useState<string[]>([]);
  // const [searchErrors, setSearchErrors] = useState<string[]>([]);

  const handleSearchConfirm = async() => {
    const message = searchString
      ? `You entered ${searchString} to search`
      : "Input is blank";
    const results = await scrape(searchString);
    console.log(results);
    console.log(message);
    setSearchString(undefined);
  };
  return (
    <StyledPageWrapperDiv>
      <Typography variant="h2" align="center">
        Truffle Pig
      </Typography>
      <StyledInputWrapperDiv>
        <TextField
          id="url-search-input"
          value={searchString || ""}
          onChange={(event) => setSearchString(event.target.value)}
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          onClick={handleSearchConfirm}
          onKeyDown={handleSearchConfirm}
        >
          Go!
        </Button>
      </StyledInputWrapperDiv>
    </StyledPageWrapperDiv>
  );
}

export default App;
