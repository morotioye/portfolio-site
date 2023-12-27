import {Stack, Typography} from '@mui/material'

const StyledTypography = ({children}) => {
  return (
    <Typography
      sx={{
        color: '#FFF',
        fontFamily: 'Kanit',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 600,
        textTransform: 'uppercase',
        lineHeight: 'normal',
      }}
    >
      {children}
    </Typography>
  )
}

const NavigationTabs = () => {
  return (
    <Stack direction="row" spacing={2} position="absolute" top="5%" right="5%">
      <StyledTypography>Projects</StyledTypography>
      <StyledTypography>/</StyledTypography>
      <StyledTypography>Education</StyledTypography>
      <StyledTypography>/</StyledTypography>
      <StyledTypography>Skills</StyledTypography>
      <StyledTypography>/</StyledTypography>
      <StyledTypography>Resume</StyledTypography>
    </Stack>
  )
}

export default NavigationTabs
