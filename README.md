# PERN Employees Front

This is a P.E.R.N. stack app for managers and employees. Work in progress

## Tech stack

- React.js
- TailwindCSS
- Zustand

## How to use this project

You can try the deployed site at blabla.com or take this project for development or testing as follows:

1. Clone this repository

```
git clone https://github.com/augusticor/pern-employees-front.git
```

2. Install dependencies

    - Development or testing mode

    ```
    npm install
    ```
    
    - Production mode
    
    ```
    npm ci --omit=dev
    ```

3. Rename [.env.example](.env.example) file to .**env._mode_** you want and configure the environment variables for the mode you want (development, test or production)

4. Run the project

    - Development mode

    ```
    npm run dev
    ```

    - Testing mode

    ```
    npm run test
    ```

    - Production mode

    ```
    npm run build
    ```
