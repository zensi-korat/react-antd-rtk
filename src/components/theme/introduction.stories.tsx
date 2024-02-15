/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from "antd";
import { TitleXXL, Para, MainWrapper, Boxx, TitleXL, TitleLG } from "./storyTheme.style";

export default {
  title: "Theme/Introduction",
};

export const Default = () => {
  return (
    <MainWrapper>
      <Row gutter={[16, 16]}>
        <Col sm={24}>
          <TitleXXL>Introduction</TitleXXL>
          <Para>
            In this React boilerplate, we utilize TypeScript alongside the Ant Design framework and Styled Components
            for React, providing a robust foundation for developing web applications with enhanced type safety and the
            feature-rich UI components offered by Ant Design.
          </Para>

          <Para>
            In this React setup, we've integrated various Ant Design (Antd) components, complementing them with custom
            utility classes such as Color, Spacing, Radius, and more. These utilities enhance the development process by
            providing consistent styling and functionality throughout the application
          </Para>
        </Col>
      </Row>
      <TitleXL>Variables</TitleXL>
      <Para>
        In the variable.ts file, we've structured objects to encapsulate various utility parameters such as colors, font
        sizes, spacing, and more. These variables, we can seamlessly customize our theme to align with specific project
        requirements, ensuring flexibility and consistency across the application's design elements
      </Para>
      <TitleXL>Utility Classes </TitleXL>
      <Para>
        The next step involves transitioning to the themeVariable.ts and utilitiesClasses.ts files. These utility
        classes are generated based on the variables defined in the variables.ts file. To modify the generated classes,
        you can directly edit the variables.ts file, allowing for seamless updates and customization of the styling
        throughout the application.
      </Para>
      <Para>
        Furthermore, the pivotal utilityClasses.ts file is essential. Here, we import the variables.ts file and utilize
        its contents to dynamically generate classes based on the values passed, fostering a flexible and scalable
        approach to styling and component customization.
      </Para>
      <Para>Using variables from variable.ts file we are creating CSS variables to use in UI development</Para>
      <Boxx>
        <TitleLG>Different Utilities class are</TitleLG>
        <ul>
          <li>
            <a href="http://localhost:6006/?path=/story/theme-utility-classes--align-items">Align Items</a>
          </li>
          <li>
            <a href="http://localhost:6006/?path=/story/theme-utility-classes--radius">Radius</a>
          </li>
          <li>
            <a href="http://localhost:6006/?path=/story/theme-utility-classes--color">Colors</a>
          </li>
          <li>
            <a href="http://localhost:6006/?path=/story/theme-utility-classes--display">Display</a>
          </li>
        </ul>
      </Boxx>
      <Boxx>
        <TitleLG>Config</TitleLG>
        <Para>
          Inside the config folder, you'll find various files serving different purposes. Among these, the
          global.style.ts file consolidates global CSS rules applicable throughout the entire project
        </Para>
        <Para>
          Additionally, the themeVariable.ts file provides a means to customize Ant Design (Antd) components according
          to specific requirements, facilitating the creation of themes adaptable for both dark and light modes.
        </Para>
      </Boxx>
    </MainWrapper>
  );
};

Default.story = {
  name: "Introduction",
};
