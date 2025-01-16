import { IconBrandGithub, IconBrandLinkedin, IconBrandStorybook, IconMoon, IconSettings, IconSun } from "@tabler/icons-react";
import { Button, Collapsible, ColorPicker, Drawer, IconButton, Text, ToggleButton, ToggleButtonGroup, useTheme, useUpdateTheme } from "stelios";
import { useState } from "react";
import React from 'react';
import styled from "styled-components";
import colors from "../../../../tokens/color/color-tokens.json";
import { useWindowSize } from "../../../../hooks/use-windowsize";

const StyledDrawerChildren = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const StyledDrawerChildrenItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Settings = () => {
    const updateTheme=useUpdateTheme();
    const windowSize = useWindowSize();
    const mobile = windowSize.width < 480;
    const colorPalette=useTheme().theme.colorPalette;
    const [primaryColor, setPrimaryColor] = useState(colors.accent.primary);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [appearance, setAppearance] = React.useState(
        colorPalette.primary.appearance
    );

    const _handlePrimaryColorChange = (color) => {
        if (!color) return;
        setPrimaryColor(color);
        updateTheme({
          appearance,
          accents: {
            primary: color,
            black: colors.accent.black
          },
        });
      };

    const _onClickRevert = () => {
        setAppearance(colors.appearance);
        setPrimaryColor(colors.accent.primary);
        updateTheme({
          appearance: colors.appearance,
          accents: {
            primary: colors.accent.primary,
          },
        });
      };
    return (
        <>
        <IconButton color="primary" size="small" variant="neumorph" icon={<IconSettings />} alt="Settings" onClick={() => setDrawerOpen(true)}/>
        <Drawer size="small" color="primary" open={drawerOpen} onClose={() => setDrawerOpen(false)} hasCloseIcon title={<Text size="large" color="primary">Settings</Text>} position="right">
          <StyledDrawerChildren>
            

          <StyledDrawerChildrenItem>
            <div style={{ marginTop: "1rem" }}>
              <ColorPicker
                size="medium"
                variant="soft"
                label="Website Color"
                color="primary"
                width="100%"
                onChange={_handlePrimaryColorChange}
              />
            </div>
          </StyledDrawerChildrenItem>

          <StyledDrawerChildrenItem
            className="revert-button"
            style={{ marginTop: "0.5rem" }}
          >
            <Button
              variant="contained"
              color="#AD2831"
              onClick={_onClickRevert}
            >
              Revert to Default Settings
            </Button>
          </StyledDrawerChildrenItem>
        </StyledDrawerChildren>
        </Drawer>
        </>
    )
};

export default Settings;