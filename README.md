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

    2.1 Development or testing mode

    ```
    npm install
    ```

    2.2 Production mode
    
    ```
    npm ci --omit=dev
    ```

3. Rename [.env.example](.env.example) file to .**env._mode_** you want and configure the environment variables for the mode you want (development, test or production)

4. Run the project

    4.1 Development mode

    ```
    npm run dev
    ```

    4.2 Testing mode

    ```
    npm run test
    ```

    4.3 Production mode

    ```
    npm run build
    ```