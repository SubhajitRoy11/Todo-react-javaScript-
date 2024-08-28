# To-Do App: Lessons Learned from React.js and JavaScript Implementations

This repository contains two implementations of a To-Do app:
1. **React.js Version**: A modern approach using React.js.
2. **Vanilla JavaScript Version**: A traditional approach using plain JavaScript and DOM manipulation.

## 5 Key Lessons Learned

### 1. State Management (React.js) vs. DOM Manipulation (JavaScript)
- **React.js**: State is managed using React hooks (`useState`), allowing for efficient state changes and re-renders.
- **JavaScript**: Direct DOM manipulation is used to manage UI changes, providing a hands-on understanding of how the browser updates the interface.

### 2. Component-Based Architecture (React.js)
- **React.js**: Encourages the creation of reusable components, leading to better code organization and maintainability.
- **JavaScript**: Involves a more monolithic structure, with all UI logic typically managed in one place, which can become complex as the application grows.

### 3. Event Handling
- **React.js**: Event handling is done declaratively within JSX, making it clear how events relate to specific UI components.
- **JavaScript**: Events are handled with `addEventListener`, providing a deeper understanding of how to manage events directly in the browser.

### 4. Rendering Efficiency
- **React.js**: Utilizes the virtual DOM for optimized rendering, updating only the necessary parts of the UI, which is crucial for performance in larger applications.
- **JavaScript**: Involves direct DOM manipulation, which can be less efficient, especially as the number of UI elements increases.

### 5. Learning Curve and Tools
- **React.js**: Introduces advanced concepts like JSX, hooks, and component lifecycles, which come with a learning curve but offer powerful abstractions for building scalable UIs.
- **JavaScript**: Provides a strong foundation in fundamental web development concepts, such as DOM manipulation, event handling, and basic array operations.

## Repository Structure

