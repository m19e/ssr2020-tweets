import { overrideThemeVariables } from "ui-neumorphism";

const OverrideTextColor = (color) => {
    overrideThemeVariables({
        "--g-text-color-secondary-light": color,
    });
};

export default OverrideTextColor;
