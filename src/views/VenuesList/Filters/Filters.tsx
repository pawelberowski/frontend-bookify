import {Accordion, AccordionDetails, AccordionSummary, Container, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {PriceRangeSlider} from "./PriceRangeSlider.tsx";

export const Filters = () => {
  return (
    <Container>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>price range</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <PriceRangeSlider />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}