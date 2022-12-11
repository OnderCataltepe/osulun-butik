import '@mui/material/styles/createPalette';
declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    [prop: string]: string;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subText: React.CSSProperties;
    miniText: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    subText?: React.CSSProperties;
    miniText: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subText: true;
    miniText: true;
  }
}
